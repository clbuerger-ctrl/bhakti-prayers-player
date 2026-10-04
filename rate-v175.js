/* [Grok-Bot] V1.75: Wiedergabe-Tempo fuer MP3 (Auswahl neben "-10 s"/"+10 s"). Nur sichtbar, solange MP3 die aktive Quelle ist; bei YouTube ausgeblendet.
   Stufen: langsam fein (0,7 ... 0,95), schnell grob (1,1 / 1,25 / 1,5). preservesPitch=true, die Tonhoehe bleibt.
   Wahl je Prayer in localStorage "bpp-rate" gemerkt. YouTube spielt immer mit Tempo 1 (die MP3 wird dabei angehalten).
   Auto-Strophe: songProgress() nutzt bei MP3 a.currentTime (Medienzeit), stimmt also bei jedem Tempo. */
(function(){
  var RATES=[0.7,0.75,0.8,0.85,0.9,0.95,1,1.1,1.25,1.5];
  var mem={}; try{ mem=JSON.parse(localStorage.getItem("bpp-rate")||"{}")||{}; }catch(e){ mem={}; }
  function cur(){ return (typeof i!=="undefined" && i>=0 && typeof PRAYERS!=="undefined")?PRAYERS[i]:null; }
  function want(){ var P=cur(); var r=P?mem[P.id]:1; return (typeof r==="number" && RATES.indexOf(r)>=0)?r:1; }
  function lab(r){ return (r===1?"1,0":String(r).replace(".",","))+"\u00d7"; }
  var au=null, sel=null, setting=false;
  function apply(){
    if(!au) return;
    var r=(typeof ytOn!=="undefined" && ytOn)?1:want();
    try{ au.preservesPitch=true; au.mozPreservesPitch=true; au.webkitPreservesPitch=true; }catch(e){}
    setting=true;
    try{ if(au.defaultPlaybackRate!==r) au.defaultPlaybackRate=r; if(au.playbackRate!==r) au.playbackRate=r; }catch(e){}
    setting=false;
    upd();
  }
  window.bppRateApply=apply;
  window.bppSetRate=function(r){ var P=cur(); if(!P || RATES.indexOf(r)<0) return; if(r===1) delete mem[P.id]; else mem[P.id]=r;
    try{ localStorage.setItem("bpp-rate", JSON.stringify(mem)); }catch(e){} apply(); };
  function upd(){
    if(!sel) return;
    var mp3=!!(au && au.getAttribute("src") && !(typeof ytOn!=="undefined" && ytOn) && cur());
    sel.style.display=mp3?"":"none";
    if(!mp3) return;
    var r=want(), v=String(r);
    if(sel.value!==v) sel.value=v;
    sel.classList.toggle("off1", r!==1);
  }
  document.addEventListener("DOMContentLoaded", function(){
    au=document.getElementById("a"); if(!au) return;
    var st=document.createElement("style");
    st.textContent="#selRate{font:inherit;font-size:.82rem;font-weight:600;padding:2px 4px;border-radius:6px;border:1px solid #6b5a33;background:transparent;color:#e8c57a;cursor:pointer;min-width:4.3em}"+
      "#selRate option{background:#222;color:#eee}#selRate.off1{background:#e8c57a;color:#222;border-color:#e8c57a}";
    document.head.appendChild(st);
    sel=document.createElement("select"); sel.id="selRate"; sel.title="Tempo der MP3 (Tonh\u00f6he bleibt)"; sel.setAttribute("aria-label","Tempo der MP3");
    RATES.forEach(function(r){ var o=document.createElement("option"); o.value=String(r); o.textContent=lab(r); sel.appendChild(o); });
    sel.onchange=function(){ window.bppSetRate(parseFloat(sel.value)); try{ sel.blur(); document.body.focus(); }catch(e){} };
    sel.style.display="none";
    var fw=document.getElementById("btnFwd10")||document.getElementById("btnNext");
    if(fw) fw.parentNode.insertBefore(sel, fw.nextSibling);
    ["loadstart","loadedmetadata","play","playing"].forEach(function(ev){ au.addEventListener(ev, apply); });
    /* Tempo ueber das Menue der Audio-Steuerung (z. B. Chrome) uebernehmen, sofern eine der Stufen */
    au.addEventListener("ratechange", function(){ if(setting || (typeof ytOn!=="undefined" && ytOn)) return;
      var r=Math.round(au.playbackRate*100)/100; if(RATES.indexOf(r)>=0 && r!==want()) window.bppSetRate(r); else upd(); });
    apply(); setInterval(upd, 500);
    setTimeout(function(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V1.75"; document.title="Bhakti Prayers Player V1.75"; }, 300);
  });
})();
