/* [Grok-Bot] V2.01: Service Worker fuer die App-Installation (BPPlayer). Immer zuerst Netz, Cache nur als Ersatz ohne Verbindung.
   Audio, YouTube und fremde Server laufen unveraendert am Service Worker vorbei. */
var CACHE="bpp-v201";
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var r=e.request, u=new URL(r.url);
  if(r.method!=="GET" || u.origin!==self.location.origin || r.headers.has("range") || /\.(mp3|m4a|ogg|wav)$/i.test(u.pathname)) return;
  e.respondWith(fetch(r).then(function(res){
    if(res && res.ok && res.type==="basic"){ var c=res.clone(); caches.open(CACHE).then(function(ca){ ca.put(r, c); }); }
    return res;
  }).catch(function(){ return caches.match(r).then(function(m){ return m || caches.match("./"); }); }));
});
