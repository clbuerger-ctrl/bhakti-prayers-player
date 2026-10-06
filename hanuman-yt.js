/* [Grok.com] V1.98: Hanuman Chalisa spielt die Dropbox-Datei 2_5278459603569355214.mp3 (Pandita Bhavani, Telegram/Prarthana) als audio/hanuman.mp3. Nicht mehr die Prabhu-Aufnahme und nicht mehr YouTube als erste Quelle. YouTube rhSVddEZW88 bleibt nur Ersatz, falls die Datei nicht laedt. Alte Strophenzeiten verworfen. */
(function(){
  var h = PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!h) return;
  h.youtube = "rhSVddEZW88";
  h.preferFile = true;
  h.audio = "audio/hanuman.mp3?v=98";
  h.marksYt = [];
  h.marks = [];
  var NR = { "Doh\u0101 1":"Doh\u0101\u00b7a", "Doh\u0101 2":"Doh\u0101\u00b7b", "K\u012brtan 1":"K\u012brtan\u00b7a", "K\u012brtan 2":"K\u012brtan\u00b7b" };
  h.zeilen.forEach(function(z){ if(NR[z.nr]) z.nr = NR[z.nr]; });
  h.quelle = "Prathana with chords \u00b7 Sri Vitthal Dham \u00b7 S. 21\u201323 \u00b7 Ton: Pandita Bhavani (Telegram, 2_5278459603569355214.mp3)";
  h.hinweis = h.hinweisDe = "Text und Akkorde wie im Heft, vier Zeilen je Strophe. Ton: Pandita Bhavani, Datei aus Telegram, nicht mehr die Prabhu-Aufnahme.";
  h.hinweisEn = "Lyrics and chords as in the booklet, four lines per verse. Recording: Pandita Bhavani, the Telegram file, no longer the Prabhu recording.";
})();
/* [Grok-Bot] V1.57: YouTube-Status und Play/Pause bleiben. */
(function(){
  var lastT=null, still=0, moving=false;
  setInterval(function(){
    if(typeof ytOn==="undefined" || !ytOn) { lastT=null; still=0; moving=false; return; }
    if(typeof ytTime!=="number") return;
    if(lastT!==null && ytTime!==lastT){
      still=0; moving=true;
      if(!ytPlaying){ ytPlaying=true; try{ markPlayOrigin(); }catch(e){} try{ syncPlayBtn(); }catch(e){} }
    } else if(lastT!==null){
      still++;
      if(still>=2) moving=false;
      if(still>=3 && ytPlaying){ ytPlaying=false; try{ syncPlayBtn(); }catch(e){} }
    }
    lastT=ytTime;
  }, 700);
  window.addEventListener("message", function(e){
    var d=e.data; if(typeof d==="string"){ try{ d=JSON.parse(d); }catch(err){ return; } }
    if(!d || typeof ytOn==="undefined" || !ytOn) return;
    if((d.event==="initialDelivery" || d.event==="onReady") && !moving && ytPlaying){ ytPlaying=false; try{ syncPlayBtn(); }catch(err){} }
  });
  var tp=window.togglePlay;
  window.togglePlay=function(){
    if(typeof i!=="undefined" && i>=0 && ytOn){
      if(moving){ ytCmd("pauseVideo"); ytPlaying=false; moving=false; still=0; }
      else { ytCmd("playVideo"); ytPlaying=true; still=0; try{ markPlayOrigin(); }catch(err){} }
      try{ syncPlayBtn(); }catch(err){} return;
    }
    return tp.apply(this, arguments);
  };
  try{
    if(localStorage.getItem("bpp-hn-bhavani-file")!=="1"){
      var s=JSON.parse(localStorage.getItem("bpp-marks")||"{}");
      Object.keys(s).forEach(function(k){ if(String(k).indexOf("hanuman")===0) delete s[k]; });
      localStorage.setItem("bpp-marks", JSON.stringify(s));
      localStorage.setItem("bpp-hn-bhavani-file","1");
    }
  }catch(e){}
  document.addEventListener("DOMContentLoaded", function(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V1.98"; document.title="Bhakti Prayers Player V1.98"; });
})();
