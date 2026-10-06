/* [Grok-Bot] V1.92: Grossbild-Menue reagiert erst, wenn es sichtbar ist.
   Ursache: Bei Touch blendet das Fingerheben (touchend) die Leiste sofort ein; der Klick, den das Handy erst danach erzeugt,
   traf dann schon die gerade freigegebene Taste an dieser Stelle (z. B. Play, +30, naechstes Prayer).
   Jetzt: Solange die Leiste ausgeblendet ist und noch 350 ms nach dem Einblenden nehmen ihre Tasten keine Klicks an
   (pointer-events:none und Klick-Sperre). Ein Tipp auf die Stelle einer verborgenen Taste blendet nur das Menue ein; eine
   Beruehrung, die in der Sperrzeit beginnt (Doppeltippen, Wischen), loest keine Taste aus. Der Ende-Bildschirm bleibt sofort bedienbar. */
window.BPP_BUILD="1.92";
(function(){
  if(window.bppV192) return; window.bppV192=1;
  var LOCK=350, until=0, gest=0, bar=null, ov=null, tmr=null;
  var css=document.createElement("style");
  css.textContent="#bppFsBar.hid,#bppFsBar.hid *,#bppFsBar.bppLock,#bppFsBar.bppLock *{pointer-events:none!important}";
  document.head.appendChild(css);
  function isEnd(){ return !!(ov && ov.classList.contains("end")); }
  function locked(){ return !!bar && !isEnd() && (bar.classList.contains("hid") || Date.now()<until); }
  function update(){
    if(!bar) return; bar.classList.toggle("bppLock", locked());
    clearTimeout(tmr); var d=until-Date.now(); if(d>0) tmr=setTimeout(update, d+5);
  }
  function onMut(recs){
    recs.forEach(function(r){ var was=/(^|\s)hid(\s|$)/.test(r.oldValue||""), now=bar.classList.contains("hid");
      if(was && !now && !isEnd()) until=Math.max(until, Date.now()+LOCK); });
    update();
  }
  function attach(){
    var b=document.getElementById("bppFsBar"); if(!b || b===bar) return;
    bar=b; ov=document.getElementById("bppFs");
    new MutationObserver(onMut).observe(bar,{attributes:true, attributeFilter:["class"], attributeOldValue:true});
    update();
  }
  /* Beruehrung beginnt in der Sperrzeit: die ganze Geste sperren */
  function down(){ attach(); gest=locked()?Date.now():0; }
  /* Finger hebt sich bei verborgener Leiste: sofort sperren, bevor v183 die Leiste einblendet */
  function up(){ attach(); if(bar && bar.classList.contains("hid") && !isEnd()){ until=Math.max(until, Date.now()+LOCK); bar.classList.add("bppLock"); update(); } }
  window.addEventListener("touchstart", down, {capture:true, passive:true});
  window.addEventListener("pointerdown", down, {capture:true, passive:true});
  window.addEventListener("touchend", up, {capture:true, passive:true});
  window.addEventListener("pointerup", up, {capture:true, passive:true});
  window.addEventListener("click", function(e){
    attach(); if(!bar || !e.target || !bar.contains(e.target)) return;
    if(isEnd()) return;
    if(locked() || (gest && Date.now()-gest<1200)){
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      if(bar.classList.contains("hid")){ var st=document.getElementById("bppFsStage"); if(st) st.dispatchEvent(new MouseEvent("click",{bubbles:true})); }
    }
  }, true);
  setInterval(attach, 500);
  window.bppMenuLock=function(){ return {locked:locked(), until:until, gest:gest}; };
})();
