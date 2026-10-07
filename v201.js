/* [Grok-Bot] V2.01: BPPlayer als App installierbar (manifest.json, Symbole, Service Worker sw.js), Steuerung ueber Benachrichtigung und
   Sperrbildschirm (Media Session: Play/Pause, Strophe vor/zurueck, 10 s spulen). Abspielzeile (Play-Tasten) oben in der Leiste,
   ueber dem Audio-Balken, in Listen- und Normalansicht; Grossbild unveraendert. */
/* V2.03: Adresse des Service Workers aus window.BPP_SW (spaetere Versionen setzen sie). */
window.BPP_BUILD="2.01";
(function(){
  if(window.bppV201) return; window.bppV201=1;
  var hd=document.head||document.getElementsByTagName("head")[0];
  function add(tag, at){ var e=document.createElement(tag); Object.keys(at).forEach(function(k){ e.setAttribute(k, at[k]); }); hd.appendChild(e); return e; }
  if(hd && !document.querySelector('link[rel="manifest"]')){
    add("link", {rel:"manifest", href:"manifest.json?v=201"});
    if(!document.querySelector('meta[name="theme-color"]')) add("meta", {name:"theme-color", content:"#1a1410"});
    add("link", {rel:"icon", type:"image/svg+xml", href:"icon-192.svg"});
    add("link", {rel:"apple-touch-icon", href:"icon-192.svg"});
    add("meta", {name:"mobile-web-app-capable", content:"yes"});
    add("meta", {name:"application-name", content:"BPPlayer"});
  }
  if("serviceWorker" in navigator && location.protocol!=="file:"){
    window.addEventListener("load", function(){ navigator.serviceWorker.register(window.BPP_SW||"sw.js?v=201", {scope:"./"}).catch(function(){}); });
  }
  /* Abspielzeile nach oben */
  function moveRow(){
    var bar=document.querySelector(".bar"), a=document.getElementById("a"); if(!bar || !a) return;
    var row=bar.querySelector(":scope > .row"); if(!row || row.nextElementSibling===a || a.compareDocumentPosition(row) & Node.DOCUMENT_POSITION_PRECEDING) return;
    bar.insertBefore(row, a); row.style.marginBottom="6px";
  }
  /* Media Session */
  function title(){ try{ return (typeof i!=="undefined" && i>=0 && PRAYERS[i]) ? (PRAYERS[i].titel||"") : "Bhakti Prayers Player"; }catch(e){ return "Bhakti Prayers Player"; } }
  function meta(){
    if(!("mediaSession" in navigator) || typeof MediaMetadata==="undefined") return;
    try{
      navigator.mediaSession.metadata=new MediaMetadata({ title:title(), artist:"BPPlayer", album:"Bhakti Prayers Player",
        artwork:[{src:"icon-192.svg", sizes:"192x192", type:"image/svg+xml"},{src:"icon-512.svg", sizes:"512x512", type:"image/svg+xml"}] });
    }catch(e){}
  }
  function pos(){
    var a=document.getElementById("a");
    try{ if(a && isFinite(a.duration) && a.duration>0 && navigator.mediaSession.setPositionState) navigator.mediaSession.setPositionState({duration:a.duration, playbackRate:a.playbackRate||1, position:Math.min(a.currentTime||0, a.duration)}); }catch(e){}
  }
  function setupMS(){
    if(!("mediaSession" in navigator)) return;
    var a=document.getElementById("a"), ms=navigator.mediaSession;
    function h(n, f){ try{ ms.setActionHandler(n, f); }catch(e){} }
    function playing(){ return (typeof ytOn!=="undefined" && ytOn) ? !!ytPlaying : (a && !a.paused); }
    h("play", function(){ if(!playing() && typeof togglePlay==="function") togglePlay(); });
    h("pause", function(){ if(playing() && typeof togglePlay==="function") togglePlay(); });
    h("stop", function(){ if(playing() && typeof togglePlay==="function") togglePlay(); });
    h("previoustrack", function(){ if(typeof prevLine==="function") prevLine(); });
    h("nexttrack", function(){ if(typeof nextLine==="function") nextLine(); });
    h("seekbackward", function(d){ if(a && a.src) a.currentTime=Math.max(0, (a.currentTime||0)-((d&&d.seekOffset)||10)); pos(); });
    h("seekforward", function(d){ if(a && a.src) a.currentTime=Math.min(a.duration||1e9, (a.currentTime||0)+((d&&d.seekOffset)||10)); pos(); });
    h("seekto", function(d){ if(a && a.src && d && typeof d.seekTime==="number") a.currentTime=d.seekTime; pos(); });
    if(a){
      a.addEventListener("play", function(){ meta(); ms.playbackState="playing"; pos(); });
      a.addEventListener("pause", function(){ ms.playbackState="paused"; pos(); });
      a.addEventListener("loadedmetadata", function(){ meta(); pos(); });
      a.addEventListener("ratechange", pos); a.addEventListener("seeked", pos);
    }
  }
  function init(){ moveRow(); setupMS(); meta(); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init); else init();
  function show(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.01"; document.title="Bhakti Prayers Player V2.01"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", show); else show();
  setTimeout(show, 900); setTimeout(show, 1500);
})();
