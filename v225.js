/* [Grok.com] Jukebox nur einmal: zuerst voll, dann ausblenden. Kein zweites Bild in der Seite. */
(function(){
  var st=document.createElement("style");
  st.textContent="#startPic{position:fixed;inset:0;z-index:30;margin:0;background:#1a120c;display:flex;align-items:center;justify-content:center;transition:opacity 1.1s ease}"
    +"#startPic img{width:min(92vw,900px);max-height:92vh;object-fit:contain;border:0;border-radius:12px}"
    +"body.player-in #startPic{opacity:0;pointer-events:none}";
  document.head.appendChild(st);
  var gone=false;
  function reveal(){
    if(gone) return;
    gone=true;
    document.body.classList.add("player-in");
    setTimeout(function(){
      var pics=document.querySelectorAll(".startpic, #startPic");
      pics.forEach(function(el){ el.remove(); });
    }, 1200);
  }
  setTimeout(reveal, 1600);
  window.addEventListener("keydown", reveal, {once:true});
  window.addEventListener("pointerdown", reveal, {once:true});
})();
