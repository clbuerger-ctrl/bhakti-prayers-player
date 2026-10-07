/* [Grok.com] V2.11: Guru Stotram Abend. Das Om am Anfang ist keine Strophe.
   Die Aufnahme singt Om etwa bis 10,8 s. Strophe 1 (akhanda) beginnt danach.
   Vorher keine Strophe markieren, und die Pause nach dem Om nicht als Strophenwechsel nehmen. */
window.BPP_BUILD="2.11";
(function(){
  if(window.bppV211) return; window.bppV211=1;
  var OM=11.0;
  var MARKS=[11.0, 28.1, 46.5, 62.5, 78.5, 96.5, 114.6, 130.2, 147.6, 167.5, 182.4, 199.6, 217.7, 236.4];
  function prayer(){
    if(typeof PRAYERS==="undefined" || typeof i==="undefined" || i<0) return null;
    var P=PRAYERS[i];
    return (P && P.id==="guru-stotram-abend")?P:null;
  }
  function fileOn(){ return !(typeof ytOn!=="undefined" && ytOn); }
  function now(){
    try{ if(typeof a!=="undefined" && a && isFinite(a.currentTime)) return a.currentTime||0; }catch(e){}
    return 0;
  }
  function applyMarks(){
    if(typeof PRAYERS==="undefined") return;
    var P=PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; });
    if(!P) return;
    P.marksFile=MARKS.slice();
    P._bppEstMarks=0;
    P._bppEstSrc="file";
    P._bppOmSkip=OM;
    if(window.BPP_PAUSES && BPP_PAUSES["guru-stotram-abend|file"]){
      var L=BPP_PAUSES["guru-stotram-abend|file"].slice();
      /* Pause 0–2,7 und 9,5–10,8 gehoeren zum Om, nicht zwischen Strophen */
      var out=[L[0]];
      for(var q=1;q+1<L.length;q+=2){ if(L[q+1]>OM*10){ out.push(L[q], L[q+1]); } }
      BPP_PAUSES["guru-stotram-abend|file"]=out;
    }
  }
  function clearOn(){
    var box=document.getElementById("lyrics"); if(!box) return;
    var ons=box.querySelectorAll(".stanza.on");
    for(var n=0;n<ons.length;n++) ons[n].classList.remove("on");
  }
  function inOm(){ return !!(prayer() && fileOn() && now()<OM-0.15); }
  applyMarks();
  function hook(){
    applyMarks();
    if(typeof window.stanzaFromProgress==="function" && !window.stanzaFromProgress._bpp211){
      var base=window.stanzaFromProgress;
      var fn=function(p){
        var k=base.apply(this, arguments);
        if(inOm()) return -1;
        return k;
      };
      fn._bpp211=1;
      window.stanzaFromProgress=fn;
    }
    if(typeof window.autoLineFromTime==="function" && !window.autoLineFromTime._bpp211){
      var al=window.autoLineFromTime;
      var wrap=function(){
        if(inOm()){ clearOn(); return; }
        return al.apply(this, arguments);
      };
      wrap._bpp211=1;
      window.autoLineFromTime=wrap;
    }
    if(typeof window.paintLyrics==="function" && !window.paintLyrics._bpp211){
      var pl=window.paintLyrics;
      var pw=function(){
        var r=pl.apply(this, arguments);
        if(inOm()) clearOn();
        return r;
      };
      pw._bpp211=1;
      window.paintLyrics=pw;
    }
  }
  hook();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", hook);
  window.addEventListener("load", hook);
  setInterval(hook, 700);
  function showV(){
    var v=document.querySelector("h1 .ver");
    if(v) v.textContent="V2.11";
    document.title="Bhakti Prayers Player V2.11";
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 1600); setTimeout(showV, 2800);
})();
