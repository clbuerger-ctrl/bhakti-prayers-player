/* [Grok-Bot] V2.03: Offline. Der Service Worker (sw.js?v=203) speichert die App-Dateien; v203.js laedt im Hintergrund alle MP3 aus audio/
   in den Cache (dezente Anzeige "Offline: 12/20" unten rechts), prueft vorher den Speicher (navigator.storage.estimate) und bittet um
   dauerhaften Speicher (persist). Geaenderte MP3 (anderes ETag/Groesse) werden neu geladen. Auf mobilen Daten / Datensparen wird nicht
   geladen (Anzeige "wartet auf WLAN"). Ohne Netz: Prayers mit MP3 spielen die MP3, YouTube geht nur online. */
window.BPP_BUILD="2.03";
window.BPP_SW="sw.js?v=203";
(function(){
  if(window.bppV203) return; window.bppV203=1;
  var AUD="bpp-audio-v1";
  var FILES=["arati-cd13","ashtotram","bhajare","closing-morning","ganesha-mantra","gayatri","giridhari-arati","govinda","guru-stotram-abend",
    "guru-stotram","guruji-gayatri","hanuman","kavacham-b","kavacham","lakshmi-arati","mukunda","narasimha","ramanuja","suprabhatam","vaishnava-mantra"]
    .map(function(n){ return "audio/"+n+".mp3"; });
  var base=location.href.replace(/[?#].*$/,"").replace(/[^\/]*$/,"");
  function abs(p){ return new URL(p, base); }
  function list(){
    var seen={}, out=[];
    function add(p){ if(!p) return; var u; try{ u=abs(p); }catch(e){ return; }
      if(u.origin!==location.origin || !/\/audio\/[^\/]+\.mp3$/i.test(u.pathname)) return;
      var k=u.origin+u.pathname; if(!seen[k]){ seen[k]=1; out.push(k); } }
    FILES.forEach(add);
    try{ PRAYERS.forEach(function(P){ add(P.audio); (P.audioAlt||[]).forEach(add); }); }catch(e){}
    return out;
  }
  /* Anzeige */
  var el=null;
  function show(t, done){
    if(!document.body) return;
    if(!el){ el=document.createElement("div"); el.id="bppOff";
      el.style.cssText="position:fixed;right:6px;bottom:6px;z-index:30;font:11px/1.3 system-ui,sans-serif;color:#cbb89a;background:rgba(26,20,16,.85);border:1px solid #3d2f26;border-radius:8px;padding:2px 7px;pointer-events:none;opacity:.85";
      document.body.appendChild(el); }
    el.textContent=t; el.style.display="";
    if(done) setTimeout(function(){ if(el && el.textContent===t) el.style.display="none"; }, 6000);
  }
  window.bppOfflineState={n:0, total:0, done:false, msg:""};
  function cellular(){ var c=navigator.connection; return !!(c && (c.saveData || c.type==="cellular")); }
  function head(u){ return fetch(u+"?bppdl=1", {method:"HEAD", cache:"no-store"}).then(function(r){ return r.ok?r:null; }).catch(function(){ return null; }); }
  function sig(h){ return (h.get("ETag")||"")+"|"+(h.get("Content-Length")||""); }
  function run(){
    if(!("caches" in window) || !navigator.serviceWorker) return;
    if(!navigator.onLine){ show("Offline-Modus"); return; }
    /* App-Dateien dieser Seite einmal ueber den Service Worker holen, damit sie im App-Cache liegen (erster Besuch lief ohne SW) */
    try{
      var R=[location.href].concat(performance.getEntriesByType("resource").map(function(x){ return x.name; }));
      R.forEach(function(x){ try{ var u=new URL(x); if(u.origin!==location.origin || /\/audio\//.test(u.pathname) || u.searchParams.has("t") || u.searchParams.has("bppdl")) return;
        fetch(u.href, {cache:"no-cache", mode:"same-origin", credentials:"same-origin"}).catch(function(){}); }catch(e){} });
    }catch(e){}
    var L=list(), S=window.bppOfflineState; S.total=L.length;
    caches.open(AUD).then(function(c){
      return c.keys().then(function(ks){
        var have={}; ks.forEach(function(q){ have[q.url.replace(/[?#].*$/,"")]=1; });
        /* Dateien, die nicht mehr in der Liste stehen, entfernen */
        ks.forEach(function(q){ var k=q.url.replace(/[?#].*$/,""); if(L.indexOf(k)<0) c.delete(q); });
        var n=0, need=[];
        return L.reduce(function(p, u){ return p.then(function(){
          if(!have[u]){ need.push(u); return; }
          return Promise.all([c.match(u), head(u)]).then(function(v){
            if(v[0] && v[1] && v[0].headers.get("X-BPP-Sig") && v[0].headers.get("X-BPP-Sig")!==sig(v[1].headers)) need.push(u); else n++;
          });
        }); }, Promise.resolve()).then(function(){
          S.n=n; if(!need.length){ S.done=true; show("Offline: "+n+"/"+L.length+" \u2713", true); return; }
          if(cellular()){ show("Offline: "+n+"/"+L.length+" \u00b7 wartet auf WLAN"); return; }
          return estimate(need.length).then(function(ok){
            if(!ok){ show("Offline: "+n+"/"+L.length+" \u00b7 zu wenig Speicher"); return; }
            show("Offline: "+n+"/"+L.length);
            return need.reduce(function(p, u){ return p.then(function(){
              if(cellular() || !navigator.onLine) return;
              return fetch(u+"?bppdl=1", {cache:"no-store"}).then(function(r){
                if(!r.ok) return;
                return r.blob().then(function(b){
                  var h=new Headers(); h.set("Content-Type", r.headers.get("Content-Type")||"audio/mpeg"); h.set("Content-Length", String(b.size));
                  h.set("X-BPP-Sig", sig(r.headers)); h.set("X-BPP-Time", new Date().toISOString());
                  return c.put(u, new Response(b, {status:200, headers:h}));
                }).then(function(){ n++; S.n=n; show("Offline: "+n+"/"+L.length); });
              }).catch(function(){});
            }); }, Promise.resolve()).then(function(){ S.done=(n>=L.length); show("Offline: "+n+"/"+L.length+(S.done?" \u2713":""), S.done); });
          });
        });
      });
    }).catch(function(){});
  }
  function estimate(cnt){
    try{ if(navigator.storage && navigator.storage.persist) navigator.storage.persist().then(function(p){ window.bppOfflineState.persist=p; }); }catch(e){}
    if(!(navigator.storage && navigator.storage.estimate)) return Promise.resolve(true);
    return navigator.storage.estimate().then(function(q){
      var free=(q.quota||0)-(q.usage||0), want=cnt*8*1024*1024; /* ca. 6 MB je MP3 + Reserve */
      window.bppOfflineState.free=free; return !q.quota || free>want;
    }).catch(function(){ return true; });
  }
  /* ohne Netz: MP3 statt YouTube */
  function offlinePrefs(){ if(navigator.onLine) return; try{ PRAYERS.forEach(function(P){ if(P.audio) P.preferFile=true; }); }catch(e){} }
  offlinePrefs();
  window.addEventListener("online", function(){ setTimeout(run, 2000); });
  window.addEventListener("offline", function(){ offlinePrefs(); show("Offline-Modus"); });
  window.addEventListener("load", function(){ setTimeout(function(){
    if(navigator.serviceWorker.controller) run();
    else navigator.serviceWorker.ready.then(function(){ setTimeout(run, 1500); });
  }, 3000); });
  window.bppOfflineRun=run;
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.03"; document.title="Bhakti Prayers Player V2.03"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 900); setTimeout(showV, 1500);
})();
