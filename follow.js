/* [Grok-Bot] V1.52: Autoscroll wechselt 1,5 s vor dem Strophenanfang, damit man die neue Strophe noch lesen kann.
   YouTube: Autoscroll laeuft nur, solange das Video wirklich spielt (Status vom YouTube-Player), Pause haelt ihn an. */
(function(){
  var LEAD=1.5, inAuto=false;
  var sp=window.songProgress, al=window.autoLineFromTime, sy=window.showYt;
  if(typeof sp==="function"){ window.songProgress=function(){ var p=sp.apply(this, arguments); if(p && inAuto){ p.t=Math.min(p.t+LEAD, Math.max(0, p.dur-0.1)); } return p; }; }
  if(typeof al==="function"){ window.autoLineFromTime=function(){ inAuto=true; try{ return al.apply(this, arguments); } finally { inAuto=false; } }; }
  if(typeof sy==="function"){
    window.showYt=function(){ ytTime=null; ytDur=null; var r=sy.apply(this, arguments); ytPlaying=false; syncPlayBtn(); return r; };
  }
  function setState(s){
    if(typeof s!=="number" || !ytOn) return;
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
  setInterval(function(){ if(ytOn){ try{ yt.contentWindow.postMessage(JSON.stringify({event:"listening",id:1}),"*"); }catch(e){} } }, 1500);
})();
