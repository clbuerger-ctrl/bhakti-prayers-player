/* [Grok.com] Leertaste allein tut nichts. Strg+Leertaste schaltet Gross an und aus. */
(function(){
  document.addEventListener("keydown", function(e){
    if(e.code!=="Space" && e.key!==" ") return;
    var t=e.target;
    if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
    e.stopPropagation();
    if(!e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    var st=window.bppFsState && window.bppFsState();
    if(st && st.on){ if(window.bppFsClose) window.bppFsClose(); }
    else if(window.bppFsOpen) window.bppFsOpen();
  }, true);
})();
