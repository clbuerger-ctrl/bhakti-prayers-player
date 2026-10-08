/* [Grok.com] Pfeiltasten: links -10 s, rechts +10 s, oben -30 s, unten +30 s. */
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
    if(e.ctrlKey || e.altKey || e.metaKey) return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    var d=0;
    if(e.code==="ArrowLeft") d=-10;
    else if(e.code==="ArrowRight") d=10;
    else if(e.code==="ArrowUp") d=-30;
    else if(e.code==="ArrowDown") d=30;
    else return;
    e.preventDefault();
    seek(d);
  });
})();
