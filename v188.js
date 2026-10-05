/* [Grok-Bot] V1.88: Mitlesen haelt an, solange die MP3 noch keine Metadaten hat (langsames/haengendes Netz).
   Vorher lief die Liedzeit dann nach der Uhr weiter und die Strophen blaetterten ohne Ton davon. */
(function(){
  window.BPP_BUILD="1.88";
  if(window.bppV188sp || typeof songProgress!=="function") return; window.bppV188sp=1;
  var o=songProgress;
  window.songProgress=function(){
    var p=o.apply(this, arguments);
    try{ if(p && !(typeof ytOn!=="undefined" && ytOn) && a && a.src && !a.error && !(isFinite(a.duration) && a.duration>=8)) p.t=0; }catch(e){}
    return p;
  };
})();
