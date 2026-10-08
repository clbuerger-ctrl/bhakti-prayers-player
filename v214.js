/* [Grok.com] V2.14: Abend-Guru-Stotram. OM OM OM steht in den Lyrics, ohne Strophennummer.
   Das Om der Aufnahme (bis 10,8 s) markiert diese Zeilen. akhanda mandalakaram bleibt Strophe 1. */
window.BPP_BUILD="2.14";
(function(){
  if(window.bppV214) return; window.bppV214=1;
  var OM=10.8;
  var MARKS=[2.7, 11.0, 28.1, 46.5, 62.5, 78.5, 96.5, 114.6, 130.2, 147.6, 167.5, 182.4, 199.6, 217.7, 236.4];
  function evening(){
    if(typeof PRAYERS==="undefined") return null;
    return PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; })||null;
  }
  function addOm(){
    var P=evening(); if(!P || !P.zeilen) return;
    if(P.zeilen[0] && P.zeilen[0].nr==="Om") return;
    var rows=["oṃ","oṃ","oṃ"].map(function(sa){ return {nr:"Om", ch:"", sa:sa, ue:"Om", en:"Om"}; });
    P.zeilen=rows.concat(P.zeilen);
    P.marksFile=MARKS.slice();
    P._bppEstMarks=0;
    P._bppOmLines=1;
  }
  function on(){
    return typeof i!=="undefined" && i>=0 && PRAYERS[i] && PRAYERS[i].id==="guru-stotram-abend" && !(typeof ytOn!=="undefined" && ytOn);
  }
  function tNow(){
    try{ if(typeof a!=="undefined" && a && isFinite(a.currentTime)) return a.currentTime||0; }catch(e){}
    return 0;
  }
  function idx(t){
    var k=0;
    for(var n=0;n<MARKS.length;n++){ if(MARKS[n]<=t+0.05) k=n; }
    if(t<OM) return 0;
    return k;
  }
  function lock(){
    addOm();
    if(!on() || typeof stanzaGroups!=="function" || typeof paintLyrics!=="function") return;
    var t=tNow(), k=idx(t), gs=stanzaGroups(PRAYERS[i]);
    if(!gs || !gs.length) return;
    if(k>gs.length-1) k=gs.length-1;
    var start=gs[k].start;
    if(typeof line!=="undefined" && line!==start){ line=start; try{ paintLyrics(); }catch(e){} }
    var box=document.getElementById("lyrics"); if(!box) return;
    var want=box.querySelector(".stanza[data-start='"+start+"']");
    var cur=box.querySelector(".stanza.on");
    if(cur!==want){
      var all=box.querySelectorAll(".stanza.on");
      for(var m=0;m<all.length;m++) all[m].classList.remove("on");
      if(want) want.classList.add("on");
    }
  }
  if(typeof window.stanzaFromProgress==="function" && !window.stanzaFromProgress._bpp214){
    var base=window.stanzaFromProgress;
    var fn=function(p){ if(on()) return idx(tNow()); return base.apply(this, arguments); };
    fn._bpp214=1; window.stanzaFromProgress=fn;
  }
  if(typeof window.bppSkip==="function" && !window.bppSkip._bpp214){
    var sk=window.bppSkip;
    var sw=function(d){
      if(!on()) return sk.apply(this, arguments);
      var dur=1e9; try{ if(a && isFinite(a.duration)) dur=a.duration; }catch(e){}
      var t=Math.max(0, Math.min(dur-0.4, tNow()+d));
      try{ a.currentTime=t; }catch(e){}
      try{ manualShift=0; holdLineUntil=Date.now()+2000; }catch(e){}
      lock();
    };
    sw._bpp214=1; window.bppSkip=sw;
  }
  addOm(); lock();
  setInterval(lock, 200);
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ addOm(); lock(); });
  window.addEventListener("load", function(){ addOm(); lock(); });
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.14"; document.title="Bhakti Prayers Player V2.14"; }
  setTimeout(showV, 2200); setTimeout(showV, 4200);
})();
