/* [Grok-Bot] V2.09: Strophentasten entfernt (Leiste "V"/"N" und Grossbild-Menue), Tastatur V/N ohne Wirkung.
   Manuelle Strophen-Overrides abgeschaltet: gespeicherte Strophen-Tipps (localStorage bpp-marks) einmalig geloescht, es wird nichts Neues mehr
   gespeichert und nichts Gespeichertes mehr verwendet. Autoscroll folgt nur noch den Zeiten der Aufnahme (auch nach Spulen -30/-10/+10/+30).
   Ein Tipp auf eine Strophe zeigt sie kurz, danach springt die Anzeige zurueck zur Abspielstelle. */
window.BPP_BUILD="2.09";
(function(){
  if(window.bppV209) return; window.bppV209=1;
  try{ localStorage.removeItem("bpp-marks"); }catch(e){}
  function noop(){}
  window.bppSaveUserMarks=noop;
  window.bppUserMarks=function(){ return {}; };
  window.nextLine=noop; window.prevLine=noop;
  try{ manualShift=0; }catch(e){}
  var st=document.createElement("style");
  st.textContent="#btnPrev,#btnNext,#bppFsStP,#bppFsStN,#bppFsPrev,#bppFsNext{display:none!important}";
  document.head.appendChild(st);
  function fix(){
    try{ window.bppSaveUserMarks=noop; window.bppUserMarks=function(){ return {}; }; window.nextLine=noop; window.prevLine=noop; }catch(e){}
    try{ if(manualShift) manualShift=0; }catch(e){}
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", fix); else fix();
  window.addEventListener("load", fix); setInterval(fix, 2000);
  function showV(){ var s="V"+(window.BPP_SHOW||"2.09"), v=document.querySelector("h1 .ver"); if(v) v.textContent=s; document.title="Bhakti Prayers Player "+s; } /* V2.20: folgt BPP_SHOW */
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 900); setTimeout(showV, 1500); setTimeout(showV, 2500);
})();
