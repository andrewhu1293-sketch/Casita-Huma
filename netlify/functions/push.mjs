// Casita Huma push relay: keeps each person's phone subscriptions and sends lock-screen notifications.
// Keys are generated on first use and kept in Netlify Blobs, so nothing secret lives in the repo.
import webpush from "web-push";
import { getStore } from "@netlify/blobs";

const WHO = new Set(["her", "andrew"]);
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

async function keys(store) {
  let k = await store.get("vapid", { type: "json" });
  if (!k) { k = webpush.generateVAPIDKeys(); await store.setJSON("vapid", k); }
  webpush.setVapidDetails("https://casitahuma.netlify.app", k.publicKey, k.privateKey);
  return k;
}

export default async (req) => {
  const store = getStore("casita-push");
  const k = await keys(store);
  if (req.method === "GET") {
    const feed = new URL(req.url).searchParams.get("feed");          // the other person's activity, for this phone's Novedades
    if (feed !== null) { if (!WHO.has(feed)) return json({ error: "bad who" }, 400); return json({ items: (await store.get("feed-" + feed, { type: "json" })) || [] }); }
    return json({ key: k.publicKey });
  }
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let b; try { b = await req.json(); } catch { return json({ error: "bad json" }, 400); }

  if (b.a === "sub") {
    if (!WHO.has(b.who) || !b.sub || typeof b.sub.endpoint !== "string") return json({ error: "bad sub" }, 400);
    const list = (await store.get("subs-" + b.who, { type: "json" })) || [];
    const next = [b.sub, ...list.filter(s => s.endpoint !== b.sub.endpoint)].slice(0, 4);
    await store.setJSON("subs-" + b.who, next);
    return json({ ok: true, n: next.length });
  }

  if (b.a === "send") {
    if (!WHO.has(b.to)) return json({ error: "bad to" }, 400);
    const title = String(b.title || "Casita Huma").slice(0, 60), body = String(b.body || "").slice(0, 180);
    if (b.feed && typeof b.feed === "object") {                       // keep the note for the other phone's Novedades
      const f = b.feed, item = { id: String(f.id || "").slice(0, 60), from: WHO.has(f.from) ? f.from : "", en: String(f.en || "").slice(0, 240), es: String(f.es || "").slice(0, 240), at: Number(f.at) || Date.now() };
      if (item.id) { const list = (await store.get("feed-" + b.to, { type: "json" })) || []; if (!list.some(x => x.id === item.id)) await store.setJSON("feed-" + b.to, [item, ...list].slice(0, 150)); }
    }
    const delay = Math.min(6000, Math.max(0, Number(b.delay) || 0));
    if (delay) await new Promise(r => setTimeout(r, delay));
    const list = (await store.get("subs-" + b.to, { type: "json" })) || [];
    const keep = []; let sent = 0;
    for (const s of list) {
      try { await webpush.sendNotification(s, JSON.stringify({ title, body, tag: b.tag || "" }), { TTL: 86400, urgency: "high" }); sent++; keep.push(s); }
      catch (e) { if (e.statusCode !== 404 && e.statusCode !== 410) keep.push(s); }
    }
    if (keep.length !== list.length) await store.setJSON("subs-" + b.to, keep);
    return json({ ok: true, sent, subs: list.length });
  }
  return json({ error: "unknown" }, 400);
};

export const config = { path: "/api/push" };
