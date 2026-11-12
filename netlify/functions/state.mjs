// Casita Huma data backup: keeps the latest copy of each person's app data (plus the one before it) in Netlify Blobs.
import { getStore } from "@netlify/blobs";

const WHO = new Set(["her", "andrew"]);
const MAX = 3_000_000;
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  const store = getStore("casita-state");
  const url = new URL(req.url);
  const img = url.searchParams.get("img");
  if (img !== null) {                       // photos made in the sticker maker
    if (!/^[\w-]{1,64}$/.test(img)) return json({ error: "bad id" }, 400);
    if (req.method === "GET") {
      const r = await store.getWithMetadata("img-" + img, { type: "arrayBuffer" });
      if (!r) return json({ error: "none" }, 404);
      return new Response(r.data, { headers: { "content-type": (r.metadata && r.metadata.type) || "image/png", "cache-control": "no-store" } });
    }
    if (req.method !== "PUT") return json({ error: "method" }, 405);
    const buf = await req.arrayBuffer();
    if (!buf.byteLength || buf.byteLength > MAX) return json({ error: "size" }, 413);
    await store.set("img-" + img, buf, { metadata: { type: (req.headers.get("content-type") || "image/png").slice(0, 40) } });
    return json({ ok: true });
  }
  if (req.method === "GET") {
    const who = url.searchParams.get("who");
    if (!WHO.has(who)) return json({ error: "bad who" }, 400);
    const cur = await store.get("state-" + who, { type: "json" });
    return json(cur ? { at: cur.at, state: cur.state } : { at: 0, state: null });
  }
  if (req.method !== "PUT" && req.method !== "POST") return json({ error: "method" }, 405);
  const text = await req.text();
  if (text.length > MAX) return json({ error: "too big" }, 413);
  let b; try { b = JSON.parse(text); } catch { return json({ error: "bad json" }, 400); }
  if (!WHO.has(b.who) || !b.state || typeof b.state !== "object") return json({ error: "bad body" }, 400);
  const at = Number(b.at) || Date.now();
  const cur = await store.get("state-" + b.who, { type: "json" });
  if (cur && cur.at > at) return json({ ok: false, newer: true, at: cur.at });
  if (cur) await store.setJSON("prev-" + b.who, cur);
  await store.setJSON("state-" + b.who, { at, state: b.state, saved: Date.now() });
  return json({ ok: true, at });
};

export const config = { path: "/api/state" };
