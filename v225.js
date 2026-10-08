/* [Grok.com] Jukebox-Startbild: 5 Sekunden, oder bis Taste oder Mausbewegung. */
(function(){
  var gone=false;
  function hide(){
    if(gone) return;
    gone=true;
    var el=document.getElementById("startPic");
    if(el) el.classList.add("off");
  }
  setTimeout(hide, 5000);
  window.addEventListener("keydown", hide, {once:true});
  window.addEventListener("mousemove", hide, {once:true});
  window.addEventListener("touchstart", hide, {once:true});
})();
