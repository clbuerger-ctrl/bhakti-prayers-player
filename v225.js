/* [Grok.com] Jukebox zoomt von klein gross auf, danach folgt direkt der Player. */
(function(){
  var st=document.createElement("style");
  st.textContent="#startPic{position:fixed;inset:0;z-index:30;margin:0;background:#1a120c;display:flex;align-items:center;justify-content:center}"
    +"#startPic img{width:min(92vw,900px);max-height:92vh;object-fit:contain;border:0;border-radius:12px;transform:scale(.12);transition:transform 1.35s cubic-bezier(.2,.8,.2,1)}"
    +"#startPic.zoom img{transform:scale(1)}"
    +"body.player-in #startPic{opacity:0;pointer-events:none;transition:opacity .35s ease}";
  document.head.appendChild(st);
  var gone=false;
  function reveal(){
    if(gone) return;
    gone=true;
    document.body.classList.add("player-in");
    setTimeout(function(){
      document.querySelectorAll(".startpic, #startPic").forEach(function(el){ el.remove(); });
    }, 400);
  }
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    var p=document.getElementById("startPic"); if(p) p.classList.add("zoom");
  }); });
  setTimeout(reveal, 1450);
  window.addEventListener("keydown", reveal, {once:true});
  window.addEventListener("pointerdown", reveal, {once:true});
})();
