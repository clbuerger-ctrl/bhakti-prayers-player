/* [Grok.com] Leertaste allein: Play und Pause. Strg+Leertaste: Gross. */
(function(){
  document.addEventListener("keydown", function(e){
    if(e.altKey || e.metaKey || e.shiftKey) return;
    if(e.code!=="Space" && e.key!==" ") return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
    e.stopPropagation();
    if(e.ctrlKey){
      var st=window.bppFsState && window.bppFsState();
      if(st && st.on){ if(window.bppFsClose) window.bppFsClose(); }
      else if(window.bppFsOpen) window.bppFsOpen();
      return;
    }
    try{ if(document.activeElement && document.activeElement.tagName==="IFRAME") document.activeElement.blur(); }catch(err){}
    if(typeof togglePlay==="function") togglePlay();
  }, true);
})();
