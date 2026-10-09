/* [Grok.com] Jedes Stueck speichert seine Werte einzeln.
   Vorheriges Stueck: erst an den Anfang, der zweite Klick wechselt. */
(function(){
  function cur(){ return (typeof i!=="undefined" && i>=0 && typeof PRAYERS!=="undefined") ? PRAYERS[i] : null; }
  function tnow(){
    if(typeof ytOn!=="undefined" && ytOn && typeof ytTime==="number") return ytTime;
    var a=document.getElementById("a");
    return (a && isFinite(a.currentTime)) ? a.currentTime : 0;
  }
  function saveAll(){
    var P=cur(); if(!P || typeof putSong!=="function") return;
    putSong(P.id, {
      line:typeof line==="number"?line:0,
      time:tnow(),
      showDe:!!showDe, showCh:!!showCh, lang:lang,
      steps:typeof steps==="number"?steps:0,
      autoScroll:!!autoScroll,
      scrollTempo:scrollTempo,
      tempo2:typeof scrollTempo2==="number"?scrollTempo2:0,
      splitTime:typeof splitTime==="number"?splitTime:-1,
      splitIdx:typeof splitIdx==="number"?splitIdx:-1
    });
    try{ rememberTempo(); }catch(e){}
  }
  var oldPlay=window.play;
  if(typeof oldPlay==="function" && !oldPlay._bpp231){
    var w=function(idx, resume){
      saveAll();
      var r=oldPlay.apply(this, arguments);
      try{
        var P=PRAYERS[idx], st=resume?songState(P.id):{};
        if(resume && st){
          if(typeof st.showDe==="boolean"){ showDe=st.showDe; document.body.classList.toggle("show-de", showDe); }
          if(typeof st.showCh==="boolean"){ showCh=st.showCh; document.body.classList.toggle("show-ch", showCh); }
          if(st.lang) lang=st.lang;
          if(typeof st.tempo2==="number") scrollTempo2=st.tempo2;
          if(typeof st.splitTime==="number") splitTime=st.splitTime;
          if(typeof st.splitIdx==="number") splitIdx=st.splitIdx;
          try{ applyUI(); paintLyrics(); }catch(e){}
        }
      }catch(e){}
      return r;
    };
    w._bpp231=1; window.play=w;
  }
  function rewind(){
    var a=document.getElementById("a");
    if(typeof ytOn!=="undefined" && ytOn){
      try{ yt.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[0,true]}),"*"); }catch(e){}
      ytTime=0;
    } else if(a && a.src){ try{ a.currentTime=0; }catch(e){} }
    line=0; if(typeof manualShift!=="undefined") manualShift=0;
    try{ paintLyrics(); pinStanza&&pinStanza(); }catch(e){}
    saveAll();
  }
  function hook(){
    var nv=window.bppPrayerNav; if(!nv || nv._bpp231) return;
    var prev=nv.prev;
    nv.prev=function(){
      if(tnow()>3){ rewind(); return; }
      return prev.apply(this, arguments);
    };
    nv._bpp231=1;
  }
  hook(); setInterval(hook, 500);
  setInterval(saveAll, 4000);
  window.addEventListener("pagehide", saveAll);
})();
