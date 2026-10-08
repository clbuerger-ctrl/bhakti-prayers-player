/* [Grok.com] Spulen nur mit Strg: Strg+links -10 s, Strg+rechts +10 s.
   Umschalt+Strg+links -30 s, Umschalt+Strg+rechts +30 s. Pfeile allein spulen nicht. */
(function(){
  function seek(delta){
    if(typeof i==="undefined" || i<0 || typeof PRAYERS==="undefined") return;
    var P=PRAYERS[i]; if(!P) return;
    if(typeof ytOn!=="undefined" && ytOn && P.youtube){
      var cur=(typeof ytTime==="number")?ytTime:(P.youtubeStart||0);
      var to=Math.max(0, cur+delta);
      try{ yt.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[to,true]}),"*"); }catch(e){}
      ytTime=to;
      try{ markPlayOrigin(); }catch(e){}
      return;
    }
    var a=document.getElementById("a");
    if(!a || !a.src) return;
    var dur=isFinite(a.duration)?a.duration:1e9;
    var t=Math.max(0, Math.min(dur-0.3, (a.currentTime||0)+delta));
    try{ a.currentTime=t; }catch(e){}
  }
  document.addEventListener("keydown", function(e){
    if(e.altKey || e.metaKey || !e.ctrlKey) return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    var step=e.shiftKey?30:10, d=0;
    if(e.code==="ArrowLeft") d=-step;
    else if(e.code==="ArrowRight") d=step;
    else return;
    e.preventDefault();
    seek(d);
  }, true);
})();
