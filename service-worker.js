!function(){"use strict";const e=1615705773668,t=`cache${e}`,n=["/client/client.6b90a0f6.js","/client/inject_styles.5607aec6.js","/client/index.f78bde16.js","/client/index.c5f19785.js","/client/recursion.c4e26a91.js","/client/promises.360ef249.js","/client/proto.46896f7b.js"].concat(["/service-worker-index.html","/ellipse-transformer.xsl","/favicon.png","/forsenpls.gif","/logo-192.png","/logo-512.png","/manifest.json","/math-transformer.xsl","/original-math.xml","/original-svg.xml","/waytoodank.gif"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),a=n.protocol.startsWith("http"),c=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!a||c||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
