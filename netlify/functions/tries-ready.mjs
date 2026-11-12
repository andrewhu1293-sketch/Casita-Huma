// Casita Huma: on the morning tries renew (every 4 days from 9 Nov 2026, Los Angeles time),
// send both phones a push saying they can play again. Runs daily at 17:00 UTC (9 am PST / 10 am PDT).
import webpush from "web-push";
import { getStore } from "@netlify/blobs";

const TZ = "America/Los_Angeles", PERIOD = 4, EPOCH = Date.UTC(2026, 10, 9);

function laDay(now = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now).map(x => [x.type, x.value]));
  return { key: `${p.year}-${p.month}-${p.day}`, n: Math.round((Date.UTC(+p.year, +p.month - 1, +p.day) - EPOCH) / 864e5) };
}
const isResetDay = (now) => { const { n } = laDay(now); return n > 0 && n % PERIOD === 0; };

const MSG = {
  her:    { title: "¡Ya puedes jugar! 🎟️", body: "Tienes 2 intentos nuevos en Casita Huma. ¡A ganar cupones!" },
  andrew: { title: "¡Ya puedes jugar! 🎟️", body: "Tienes 2 intentos nuevos en Casita Huma." },
};

export default async () => {
  const now = new Date(), day = laDay(now);
  if (!isResetDay(now)) return new Response("not a reset day " + day.key);
  const store = getStore("casita-push");
  if ((await store.get("tries-ping", { type: "text" })) === day.key) return new Response("already sent");
  const k = await store.get("vapid", { type: "json" });
  if (!k) return new Response("no keys yet");
  webpush.setVapidDetails("https://casitahuma.netlify.app", k.publicKey, k.privateKey);
  let sent = 0;
  for (const who of ["her", "andrew"]) {
    const list = (await store.get("subs-" + who, { type: "json" })) || [], keep = [];
    for (const s of list) {
      try { await webpush.sendNotification(s, JSON.stringify({ ...MSG[who], tag: "tries-" + day.key }), { TTL: 43200, urgency: "normal" }); sent++; keep.push(s); }
      catch (e) { if (e.statusCode !== 404 && e.statusCode !== 410) keep.push(s); }
    }
    if (keep.length !== list.length) await store.setJSON("subs-" + who, keep);
  }
  await store.set("tries-ping", day.key);
  return new Response("sent " + sent);
};

export const config = { schedule: "0 17 * * *" };
