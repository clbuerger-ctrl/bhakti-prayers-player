/* [Grok.com] Nach dem Anspielen immer ins Textfenster scrollen. */
(function(){
  function toLyrics(){
    var el=document.getElementById("lyrTitle") || document.getElementById("lyrics");
    if(!el) return;
    try{ el.scrollIntoView({block:"start", behavior:"smooth"}); }catch(e){ try{ el.scrollIntoView(true); }catch(e2){} }
  }
  function wrap(){
    if(typeof window.play!=="function" || window.play._bpp223) return;
    var pl=window.play;
    var w=function(){
      var r=pl.apply(this, arguments);
      setTimeout(toLyrics, 60);
      setTimeout(toLyrics, 400);
      return r;
    };
    w._bpp223=1;
    window.play=w;
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", wrap);
  else wrap();
  window.addEventListener("load", wrap);
})();
