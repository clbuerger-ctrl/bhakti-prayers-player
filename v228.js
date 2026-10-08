/* [Grok.com] Strg+Leertaste schaltet die Taste Gross an und aus. Leertaste allein bleibt Play. */
(function(){
  document.addEventListener("keydown", function(e){
    if(!e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    if(e.code!=="Space" && e.key!==" ") return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
    e.stopPropagation();
    var st=window.bppFsState && window.bppFsState();
    if(st && st.on){ if(window.bppFsClose) window.bppFsClose(); }
    else if(window.bppFsOpen) window.bppFsOpen();
  }, true);
})();
