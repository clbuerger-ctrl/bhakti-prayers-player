/* [Grok.com] V2.13: Im Browser nachgespielt. Beim Om stand die Markierung schon auf Strophe 2
   (ajñana), und akhanda mandalakaram wurde damit zur zweiten Strophe.
   Fest: bis 10,8 s keine Strophe. Von 10,8 bis 28 s immer Strophe 1, akhanda. Danach die gemessenen Anfänge. */
window.BPP_BUILD="2.13";
(function(){
  if(window.bppV213) return; window.bppV213=1;
  var OM=10.8, S2=28.0;
  var MARKS=[11.0, 28.1, 46.5, 62.5, 78.5, 96.5, 114.6, 130.2, 147.6, 167.5, 182.4, 199.6, 217.7, 236.4];
  function on(){
    return typeof i!=="undefined" && i>=0 && typeof PRAYERS!=="undefined" && PRAYERS[i] && PRAYERS[i].id==="guru-stotram-abend" && !(typeof ytOn!=="undefined" && ytOn);
  }
  function tNow(){
    try{ if(typeof a!=="undefined" && a && isFinite(a.currentTime)) return a.currentTime||0; }catch(e){}
    return 0;
  }
  function idx(t){
    if(t<OM) return -1;
    var k=0;
    for(var n=0;n<MARKS.length;n++){ if(MARKS[n]<=t+0.05) k=n; }
    return k;
  }
  function lock(){
    if(typeof PRAYERS==="undefined") return;
    var P=PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; });
    if(P){ P.marksFile=MARKS.slice(); P._bppEstMarks=0; P.titel="Guru Stotram (Abend)"; }
    if(!on() || typeof stanzaGroups!=="function") return;
    var t=tNow(), k=idx(t), gs=stanzaGroups(PRAYERS[i]);
    if(!gs || !gs.length) return;
    var box=document.getElementById("lyrics");
    if(k<0){
      if(box){ var ons=box.querySelectorAll(".stanza.on"); for(var n=0;n<ons.length;n++) ons[n].classList.remove("on"); }
      if(typeof line!=="undefined" && line!==0) line=0;
      return;
    }
    if(k>gs.length-1) k=gs.length-1;
    var start=gs[k].start;
    if(typeof line!=="undefined" && line!==start){
      line=start;
      try{ paintLyrics(); }catch(e){}
    }
    if(box){
      var cur=box.querySelector(".stanza.on");
      var want=box.querySelector(".stanza[data-start='"+start+"']");
      if(cur!==want){
        var all=box.querySelectorAll(".stanza.on");
        for(var m=0;m<all.length;m++) all[m].classList.remove("on");
        if(want) want.classList.add("on");
      }
    }
  }
  if(typeof window.stanzaFromProgress==="function" && !window.stanzaFromProgress._bpp213){
    var base=window.stanzaFromProgress;
    var fn=function(p){ if(on()) return idx(tNow()); return base.apply(this, arguments); };
    fn._bpp213=1; window.stanzaFromProgress=fn;
  }
  if(typeof window.bppSkip==="function" && !window.bppSkip._bpp213){
    var sk=window.bppSkip;
    var sw=function(d){
      if(!on()) return sk.apply(this, arguments);
      var dur=1e9; try{ if(a && isFinite(a.duration)) dur=a.duration; }catch(e){}
      var t=Math.max(0, Math.min(dur-0.4, tNow()+d));
      try{ a.currentTime=t; }catch(e){}
      try{ manualShift=0; holdLineUntil=Date.now()+2000; }catch(e){}
      lock();
    };
    sw._bpp213=1; window.bppSkip=sw;
  }
  lock();
  setInterval(lock, 200);
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", lock);
  window.addEventListener("load", lock);
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.13"; document.title="Bhakti Prayers Player V2.13"; }
  setTimeout(showV, 2000); setTimeout(showV, 4000);
})();
