// Casita Huma: Netlify runs this by itself after every successful deploy (the file name is the trigger).
// It pushes "the app was updated" to both phones, once per NOTE id, so a redeploy without new notes stays quiet.
import webpush from "web-push";
import { getStore } from "@netlify/blobs";

// What's new: change the id and the text on each update you want announced (same id = no new push).
const NOTE = {
  id: "v95-reset",
  title: "Casita Huma se actualizó ✨",
  body: "Arreglado: cuando Andrew reinicia los intentos de Indiana, ahora sí le llegan a su teléfono.",
};

export default async () => {
  const store = getStore("casita-push");
  if (!NOTE || !NOTE.id) return new Response("no note");
  if ((await store.get("update-ping", { type: "text" })) === NOTE.id) return new Response("already sent");
  const k = await store.get("vapid", { type: "json" });
  if (!k) return new Response("no keys yet");
  webpush.setVapidDetails("https://casitahuma.netlify.app", k.publicKey, k.privateKey);
  const payload = JSON.stringify({ title: NOTE.title, body: NOTE.body, tag: "update-" + NOTE.id });
  let sent = 0;
  for (const who of ["her", "andrew"]) {
    const list = (await store.get("subs-" + who, { type: "json" })) || [], keep = [];
    for (const s of list) {
      try { await webpush.sendNotification(s, payload, { TTL: 86400, urgency: "normal" }); sent++; keep.push(s); }
      catch (e) { if (e.statusCode !== 404 && e.statusCode !== 410) keep.push(s); }
    }
    if (keep.length !== list.length) await store.setJSON("subs-" + who, keep);
  }
  await store.set("update-ping", NOTE.id);
  return new Response("sent " + sent);
};
