/* [Grok-Bot] V1.94: Grossbild-Menue – der Oeffnungs-Tipp loest keine Taste mehr aus (ersetzt den Versuch aus V1.92).
   Problem: Bei Touch blendet das Fingerheben die verborgene Leiste ein; der Klick, den der Browser erst danach schickt,
   traf die gerade sichtbar gewordene Taste an dieser Stelle (Play, +30, naechstes Prayer ...).
   V1.92 sperrte die Leiste per pointer-events fuer ein Zeitfenster - das blockierte auf echten Handys die Tasten (V1.93 abgeschaltet).
   Jetzt keine Sperre und kein pointer-events mehr: Es wird nur genau der eine Klick verworfen, der zum Oeffnungs-Tipp gehoert
   (erster Klick hoechstens 800 ms nach dem Fingerheben bei verborgener Leiste, nahe derselben Stelle). Beruehrt man eine
   sichtbare Taste, wird nichts gemerkt und nichts verworfen. Zweiter Tipp eines Doppeltipps (<350 ms, gleiche Stelle) auf einer
   Taste: Klick verworfen, stattdessen Play/Pause wie beim Doppeltippen. Waehrend die Leiste ausblendet (0,4 s, noch sichtbar),
   bleiben ihre Tasten bedienbar (vorher schon gesperrt), und die Leiste bleibt 6 s nach der letzten Beruehrung stehen
   (vorher 3 s), damit man in Ruhe tippen kann. Abschaltbar: localStorage "bpp-noguard"="1". */
/* [Grok-Bot] V2.02: Leiste bleibt 4 s nach der letzten Beruehrung (vorher 6 s); nach einem Tastendruck in der Leiste nur noch 1,5 s. Das eigene Wiedereinblenden zaehlt nicht mehr als Beruehrung (verlaengerte vorher um ca. 3 s). Tasten-Schutz unveraendert. */
window.BPP_BUILD="1.94";
(function(){
  if(window.bppV194) return; window.bppV194=1;
  try{ if(localStorage.getItem("bpp-noguard")==="1") return; }catch(e){}
  var WIN=800, DBL=350, NEAR=40;
  var pend=null, dbl=null, sw2=null, gDbl=false, press=null, lastRel=0, log=[], fadeT=null, mbar=null;
  var css=document.createElement("style");
  css.textContent="#bppFsBar.hid.bppFade,#bppFsBar.hid.bppFade *{pointer-events:auto}";
  document.head.appendChild(css);
  /* Ausblenden (Opacity-Uebergang 0,4 s aus v183): solange noch sichtbar, Tasten bedienbar lassen */
  function watch(){
    var b=document.getElementById("bppFsBar"); if(!b || b===mbar) return; mbar=b;
    new MutationObserver(function(recs){ recs.forEach(function(r){
      var was=/(^|\s)hid(\s|$)/.test(r.oldValue||""), now=b.classList.contains("hid");
      if(!was && now){
        /* v183 blendet 3 s nach dem Einblenden aus; wir halten die Leiste 6 s nach der letzten Beruehrung sichtbar */
        if(Date.now()-lastAct<lim()-50 && active()){ selfRm=true; b.classList.remove("hid"); keepLater(); return; }
        b.classList.add("bppFade"); clearTimeout(fadeT); fadeT=setTimeout(function(){ b.classList.remove("bppFade"); }, 400); }
      else if(was && !now && !b.classList.contains("bppFade")){ if(selfRm) selfRm=false; else lastAct=Math.max(lastAct, Date.now()); }
      else if(was && !now && b.classList.contains("bppFade")){ clearTimeout(fadeT); b.classList.remove("bppFade"); } }); })
      .observe(b,{attributes:true, attributeFilter:["class"], attributeOldValue:true});
  }
  var selfRm=false, KEEP=4000, BTN=1500, lastAct=0, lastBtn=-1e9, keepT=null;
  function lim(){ return lastBtn>=lastAct-150 ? BTN : KEEP; }
  function keepLater(){ clearTimeout(keepT); keepT=setTimeout(function(){ var b=document.getElementById("bppFsBar");
    if(!b || b.classList.contains("hid") || !active()) return;
    if(Date.now()-lastAct>=lim()-50) b.classList.add("hid"); else keepLater(); }, Math.max(50, lastAct+lim()-Date.now())); }
  setInterval(watch, 500);
  function bar(){ return document.getElementById("bppFsBar"); }
  function ov(){ return document.getElementById("bppFs"); }
  function active(){ var o=ov(); return !!(o && o.classList.contains("on") && !o.classList.contains("end")); }
  function hidden(){ var b=bar(); return !!(b && b.classList.contains("hid") && !b.classList.contains("bppFade")); }
  function inBar(t){ var b=bar(); return !!(b && t && t.nodeType===1 && b.contains(t)); }
  function pt(e){ var t=(e.changedTouches && e.changedTouches[0]) || (e.touches && e.touches[0]) || e; return {x:+t.clientX||0, y:+t.clientY||0}; }
  function near(a, b, r){ return !!(a && b) && Math.abs(a.x-b.x)<=r && Math.abs(a.y-b.y)<=r; }
  function note(s){ log.push(Math.round(performance.now())+" "+s); if(log.length>40) log.shift(); }
  function onPress(e){
    watch();
    if(e.type==="pointerdown" && e.pointerType==="mouse") return;
    var now=Date.now(), p=pt(e);
    if(press && now-press.t<80 && near(press.p, p, 4)) return; /* pointerdown + touchstart derselben Beruehrung */
    press={t:now, p:p}; if(active()) lastAct=now;
    gDbl=!!(dbl && now-dbl.t<DBL && near(dbl.p, p, NEAR)); dbl=null;
  }
  function onRelease(e){
    if(e.type==="pointerup" && e.pointerType==="mouse") return;
    var now=Date.now(); if(now-lastRel<80) return; lastRel=now; /* pointerup + touchend derselben Beruehrung */
    if(!active()){ pend=null; gDbl=false; return; }
    var p=pt(e), moved=press?Math.max(Math.abs(p.x-press.p.x), Math.abs(p.y-press.p.y)):0;
    if(hidden()){ if(moved<20){ pend={t:now, p:p}; dbl={t:now, p:p}; note("open-tap"); } gDbl=false; return; }
    if(gDbl && moved<20 && inBar(e.target)){
      /* zweiter Tipp eines Doppeltipps landet auf einer Taste: wie Doppeltippen behandeln */
      sw2={t:now, p:p}; note("dbl-on-bar");
      try{ if(typeof togglePlay==="function") togglePlay(); }catch(x){}
    }
    gDbl=false;
  }
  function showIfHidden(){
    var b=bar(); if(!b || !b.classList.contains("hid")) return;
    b.classList.remove("hid"); var t0=Date.now();
    setTimeout(function(){ var bb=bar(); if(bb && (!press || press.t<=t0) && !(ov() && ov().classList.contains("end"))) bb.classList.add("hid"); }, 3000);
  }
  function onClick(e){
    var now=Date.now();
    if(pend && now-pend.t>WIN) pend=null;
    if(sw2 && now-sw2.t>WIN) sw2=null;
    if(!pend && !sw2) return;
    var p={x:+e.clientX||0, y:+e.clientY||0}, keyboard=(e.detail===0 && !e.clientX && !e.clientY);
    if(pend){ var mine=!keyboard && near(pend.p, p, NEAR); pend=null;
      if(mine && inBar(e.target)){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); note("drop open-click "+(e.target.id||e.target.className)); setTimeout(showIfHidden, 0); }
      return; }
    if(sw2){ var mine2=!keyboard && near(sw2.p, p, NEAR); sw2=null;
      if(mine2 && inBar(e.target)){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); note("drop dbl-click"); } }
  }
  var o={capture:true, passive:true};
  window.addEventListener("pointerdown", onPress, o); window.addEventListener("touchstart", onPress, o);
  window.addEventListener("pointerup", onRelease, o); window.addEventListener("touchend", onRelease, o);
  window.addEventListener("pointercancel", function(){ gDbl=false; }, o); window.addEventListener("touchcancel", function(){ gDbl=false; }, o);
  window.addEventListener("click", onClick, true);
  /* V2.02: echter Tastendruck in der Leiste (nicht der verworfene Oeffnungs-Klick) -> 1,5 s danach ausblenden */
  window.addEventListener("click", function(e){ if(!active() || hidden() || !inBar(e.target) || !(e.target.closest && e.target.closest("button,select"))) return; var now=Date.now(); lastBtn=now; lastAct=now; keepLater(); }, true);
  window.bppTapGuard=function(){ return {pend:pend, sw2:sw2, dbl:dbl, log:log.slice()}; };
})();
