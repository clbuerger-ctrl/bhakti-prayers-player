/* [Grok-Bot] V1.85: Mitlesen wieder zuverlaessig weiterblaettern.
   - Aṣṭotram (108 Namen): bisher 9 Namen je Strophe → Mitlesen wirkt ~30 s „stehengeblieben“.
     Jetzt ein Name = eine Strophe, damit die aktive Zeile mit der Aufnahme weiterwandert.
   - Prayers ohne Zeitmarken: geschaetzte marksFile (nach Silbengewicht), sobald die Audiodauer bekannt ist,
     damit Mitlesen und Vollbild der Zeit folgen. Vorher gemessene Marken (Govinda u. a.) bleiben unangetastet. */
window.BPP_BUILD="1.85";
(function(){
  if(window.bppV185) return; window.bppV185=1;
  var hooked=false;
  function hookSG(){
    if(hooked || typeof window.stanzaGroups!=="function" || window.stanzaGroups._bpp185) return;
    var baseSG=window.stanzaGroups;
    window.stanzaGroups=function(P){
      if(P && P.id==="ashtotram" && P.zeilen && P.zeilen.length){
        return P.zeilen.map(function(z,n){
          var m=String(z.sa||"").match(/^(\d+)/);
          return { key: m?m[1]:String(n+1), start:n, idx:[n] };
        });
      }
      return baseSG.apply(this, arguments);
    };
    window.stanzaGroups._bpp185=1;
    hooked=true;
  }

  function realMarks(P){
    return !!(P && P.marksFile && !P._bppEstMarks && P.marksFile.filter(function(x){ return typeof x==="number"; }).length>=2);
  }
  function audioDur(P){
    if(typeof PRAYERS==="undefined" || typeof i==="undefined" || i<0 || PRAYERS[i]!==P) return 0;
    if(typeof ytOn!=="undefined" && ytOn && typeof ytDur==="number" && ytDur>8) return ytDur;
    if(typeof a!=="undefined" && a && isFinite(a.duration) && a.duration>8) return a.duration;
    return 0;
  }
  function estimateMarks(P){
    if(!P || realMarks(P) || typeof stanzaGroups!=="function") return false;
    try{
      var gs=stanzaGroups(P); if(!gs || gs.length<2) return false;
      var dur=audioDur(P); if(!(dur>8)) return false;
      if(P._bppEstMarks && Math.abs((P._bppEstDur||0)-dur)<1.5) return false;
      var w=(typeof bppWeights==="function")?bppWeights(P, gs):gs.map(function(){ return 10; });
      var sum=0; w.forEach(function(x){ sum+=x; }); if(!(sum>0)) return false;
      var t0=0.6, usable=Math.max(dur-t0-1.5, gs.length);
      var marks=[], acc=0;
      for(var g=0;g<gs.length;g++){ marks.push(Math.round((t0+usable*(acc/sum))*10)/10); acc+=w[g]; }
      P.marksFile=marks; P._bppEstMarks=1; P._bppEstDur=dur;
      return true;
    }catch(e){ return false; }
  }

  var paintedAsh=0;
  function refresh(){
    hookSG();
    if(typeof PRAYERS==="undefined" || typeof i==="undefined" || i<0 || !PRAYERS[i]) return;
    var P=PRAYERS[i], changed=estimateMarks(P);
    var needPaint=changed;
    if(P.id==="ashtotram" && !paintedAsh){ paintedAsh=1; needPaint=true; }
    if(P.id!=="ashtotram") paintedAsh=0;
    if(needPaint){
      try{ if(typeof holdLineUntil!=="undefined") holdLineUntil=0; }catch(e){}
      try{ if(typeof paintLyrics==="function") paintLyrics(); }catch(e){}
    }
  }

  function boot(){
    hookSG();
    refresh();
    setInterval(refresh, 900);
    var lastId=null;
    setInterval(function(){
      hookSG();
      if(typeof PRAYERS==="undefined" || typeof i==="undefined" || i<0) return;
      var id=PRAYERS[i]&&PRAYERS[i].id;
      if(id!==lastId){ lastId=id; refresh(); }
    }, 400);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  /* stanzaGroups kommt erst im spaeteren Inline-Skript — nach window.load nochmal hooken */
  window.addEventListener("load", function(){ hookSG(); refresh(); });
  setTimeout(function(){ hookSG(); refresh(); }, 0);
  setTimeout(function(){ hookSG(); refresh(); }, 600);
})();
