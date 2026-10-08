/* [Grok.com] V2.17: Abend-Guru-Stotram. Liegt im Speicher noch die alte MP3 mit Om (etwa 263 s),
   wird das Om uebersprungen. Die neue Datei ohne Om (etwa 252 s) startet bei 0. */
window.BPP_BUILD=window.BPP_SHOW||"2.17"; /* [Grok-Bot] V2.20 */
(function(){
  if(window.bppV217) return; window.bppV217=1;
  var FILE="audio/guru-stotram-abend3.mp3?v=219"; /* [Grok-Bot] V2.20: gleiche Datei wie order.js */
  var CUT=10.7;
  function evening(){
    return typeof i!=="undefined" && i>=0 && typeof PRAYERS!=="undefined" && PRAYERS[i] && PRAYERS[i].id==="guru-stotram-abend";
  }
  function point(){
    if(typeof PRAYERS==="undefined") return;
    var P=PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; });
    if(!P) return;
    P.audio=FILE;
    P.audioAlt=[FILE];
    P.preferFile=true;
  }
  function skipOm(){
    if(!evening() || typeof ytOn!=="undefined" && ytOn) return;
    var el=document.getElementById("a"); if(!el || !el.src) return;
    if(!isFinite(el.duration) || el.duration<200) return;
    if(el.duration>258 && (el.currentTime||0)<CUT-0.2){
      try{ el.currentTime=CUT; }catch(e){}
    }
  }
  point();
  if(typeof window.play==="function" && !window.play._bpp217){
    var pl=window.play;
    var wrap=function(){
      point();
      var r=pl.apply(this, arguments);
      setTimeout(skipOm, 60); setTimeout(skipOm, 400); setTimeout(skipOm, 1200);
      return r;
    };
    wrap._bpp217=1; window.play=wrap;
  }
  var el=document.getElementById("a");
  if(el && !el._bpp217){
    el._bpp217=1;
    ["loadedmetadata","play","playing","seeked"].forEach(function(ev){ el.addEventListener(ev, skipOm); });
  }
  setInterval(function(){ point(); skipOm(); }, 500);
  function showV(){ var s="V"+(window.BPP_SHOW||"2.17"), v=document.querySelector("h1 .ver"); if(v) v.textContent=s; document.title="Bhakti Prayers Player "+s; } /* [Grok-Bot] V2.20 */
  setTimeout(showV, 1500); setTimeout(showV, 3200);
})();
