/* [Grok-Bot] V1.53: Vorlauf auf 0,5 s verkuerzt (war 1,5 s, zu frueh). Beim Start eines Prayers springt das Strophenfenster zur Strophe, die zur Abspielstelle passt (Anfang = Strophe 1). */
/* [Grok-Bot] V1.52: Autoscroll wechselt 1,5 s vor dem Strophenanfang, damit man die neue Strophe noch lesen kann.
   YouTube: Autoscroll laeuft nur, solange das Video wirklich spielt (Status vom YouTube-Player), Pause haelt ihn an. */
(function(){
  var LEAD=0.5, inAuto=false;
  var sp=window.songProgress, al=window.autoLineFromTime, sy=window.showYt;
  if(typeof sp==="function"){ window.songProgress=function(){ var p=sp.apply(this, arguments); if(p && inAuto){ p.t=Math.min(p.t+LEAD, Math.max(0, p.dur-0.1)); } return p; }; }
  if(typeof al==="function"){ window.autoLineFromTime=function(){ inAuto=true; try{ return al.apply(this, arguments); } finally { inAuto=false; } }; }
  if(typeof sy==="function"){
    window.showYt=function(){ ytTime=null; ytDur=null; var r=sy.apply(this, arguments); ytPlaying=false; syncPlayBtn(); return r; };
  }
  function setState(s){
    if(typeof s!=="number" || typeof ytOn==="undefined" || !ytOn) return;
    var on=(s===1);
    if(on!==ytPlaying){ ytPlaying=on; if(on){ try{ markPlayOrigin(); }catch(e){} } syncPlayBtn(); }
  }
  window.addEventListener("message", function(e){
    var d=e.data;
    if(typeof d==="string"){ try{ d=JSON.parse(d); }catch(err){ return; } }
    if(!d) return;
    if(d.event==="onStateChange") setState(d.info);
    if(d.event==="infoDelivery" && d.info) setState(d.info.playerState);
  });
  function pinNow(){
    var panel=document.getElementById("lyrics"); if(!panel) return;
    var on=panel.querySelector(".stanza.on"); if(!on) return;
    var pr=panel.getBoundingClientRect(), r=on.getBoundingClientRect(), cs=getComputedStyle(panel);
    if(panel.scrollWidth>panel.clientWidth+4) panel.scrollLeft+=r.left-pr.left-parseFloat(cs.paddingLeft||0);
    else panel.scrollTop+=r.top-pr.top-parseFloat(cs.paddingTop||0);
  }
  function syncFromTime(){
    if(typeof ytOn==="undefined" || typeof line==="undefined") return false;
    if(typeof i==="undefined" || i<0) return true;
    if(!ytOn){
      if(!(a.src && isFinite(a.duration) && a.duration>=8)) return false;
      if(pendingSeek>=3 && (a.currentTime||0)<1) return false;
    } else if(typeof ytTime!=="number") return false;
    var p=songProgress(); if(!p || !p.gs || !p.gs.length) return true;
    var k=stanzaFromProgress(p); if(k<0) k=0; if(k>p.gs.length-1) k=p.gs.length-1;
    var start=p.gs[k].start;
    if(start!==line){ line=start; persistNow(); paintLyrics(); }
    pinNow(); return true;
  }
  var timer=null;
  document.addEventListener("DOMContentLoaded", function(){ var pl=window.play; if(typeof pl==="function"){ window.play=function(){
    var r=pl.apply(this, arguments);
    var P=PRAYERS[i];
    if(P && (P.audio || P.youtube) && !(pendingSeek>=3) && line!==0){ line=0; persistNow(); paintLyrics(); }
    [60,400,1200].forEach(function(t){ setTimeout(pinNow, t); });
    if(timer) clearInterval(timer);
    var n=0; timer=setInterval(function(){ n++; if(syncFromTime() || n>30){ clearInterval(timer); timer=null; } }, 300);
    return r;
  }; }
    if(typeof i!=="undefined" && i>=0){ var n0=0, t0=setInterval(function(){ n0++; if(syncFromTime() || n0>30) clearInterval(t0); }, 300); }
  });
  window.addEventListener("load", function(){ setTimeout(pinNow, 300); });
  setInterval(function(){ if(typeof ytOn!=="undefined" && ytOn && typeof yt!=="undefined"){ try{ yt.contentWindow.postMessage(JSON.stringify({event:"listening",id:1}),"*"); }catch(e){} } }, 1500);
})();
/* [Grok-Bot] V1.72: Guru-Stotram-Uebersetzung (Prathana SVD) und Listen-Reihenfolge nach SVD-Inhalt, synchron nachgeladen vor dem Seitenskript. */
if(document.readyState==="loading"){ document.write('<script src="tr-v172.js?v=177"><\/script>'); }
/* [Grok-Bot] V1.73: Morgen-/Abendliste nach dem SVD-Inhaltsverzeichnis (Override der Anordnung aus listview.js). */
if(document.readyState==="loading"){ document.write('<script src="plan-v173.js?v=177"><\/script>'); }
/* [Grok-Bot] V1.74: Suprabhatam- und Govinda-Uebersetzungen nach Prathana SVD, Wochentag-Knoepfe ausgeblendet. */
if(document.readyState==="loading"){ document.write('<script src="tr-v174.js?v=177"><\/script>'); }
/* [Grok-Bot] V1.75: Tempo-Auswahl fuer die MP3-Wiedergabe (je Prayer gemerkt, Tonhoehe bleibt). */
if(document.readyState==="loading"){ document.write('<script src="rate-v175.js?v=177"><\/script>'); }
/* [Grok-Bot] V1.76: Zeitmarken als Abfolge [Zeit, Strophe] (Narasimha mit Ruecksprung 4->3), Taste "Mitlesen", Tasten -/+ nur wo sie wirken. */
if(document.readyState==="loading"){ document.write('<script src="seq-v176.js?v=177"><\/script>'); }
/* [Grok-Bot] V1.77: Schutz gegen Seitenfehler bei langsamer Verbindung: Zeitgeber in autoscroll.js und follow.js warten, bis autoScroll, ytOn, i und line definiert sind.
   Dazu v177.js: Tasten -/+ ueberall aus, Bhajare-Text und -Abfolge, Versionspruefung (version.json). Zusatzdateien mit ?v=177, damit kein alter Stand aus dem Cache kommt. */
if(document.readyState==="loading"){ document.write('<script src="v177.js?v=177"><\/script>'); }
