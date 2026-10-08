/* [Grok.com] Strg+Leertaste: grosses Jukebox-Bild oder Normalansicht. Leertaste allein bleibt Play. */
(function(){
  var st=document.createElement("style");
  st.textContent="body.bigpic .startpic,body.bigpic .startpic.off{display:block;position:fixed;inset:0;z-index:40;margin:0;background:#1a120c;overflow:auto}"
    +"body.bigpic .startpic img{width:min(100%,1100px);max-height:100vh;object-fit:contain;border:0;border-radius:0}";
  document.head.appendChild(st);
  function toggle(){
    document.body.classList.toggle("bigpic");
    var el=document.getElementById("startPic");
    if(!el) return;
    if(document.body.classList.contains("bigpic")) el.classList.remove("off");
  }
  document.addEventListener("keydown", function(e){
    if(!e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    if(e.code!=="Space" && e.key!==" ") return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
    e.stopPropagation();
    toggle();
  }, true);
})();
