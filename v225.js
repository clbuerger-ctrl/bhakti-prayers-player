/* [Grok.com] Jukebox zuerst, Player legt sich darueber, Bild blendet im Hintergrund aus. */
(function(){
  var st=document.createElement("style");
  st.textContent=".startpic{position:fixed;inset:0;z-index:30;margin:0;background:#1a120c;display:flex;align-items:center;justify-content:center;transition:opacity 1.2s ease}"
    +".startpic img{width:min(92vw,900px);max-height:92vh;object-fit:contain;border:0;border-radius:12px}"
    +"body.player-in .startpic{opacity:0;pointer-events:none}";
  document.head.appendChild(st);
  function reveal(){
    if(document.body.classList.contains("player-in")) return;
    document.body.classList.add("player-in");
    setTimeout(function(){ var el=document.getElementById("startPic"); if(el) el.classList.add("off"); }, 1300);
  }
  setTimeout(reveal, 1600);
  window.addEventListener("keydown", reveal, {once:true});
  window.addEventListener("pointerdown", reveal, {once:true});
})();
