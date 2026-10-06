/* [Grok-Bot] V1.91: Grossbild – Vorschau in voller Groesse und gleitender Uebergang (ersetzt die Vorschau aus v189.js).
   - Vorschauzeile (erste Zeile der naechsten Strophe bzw. des naechsten Teils) in derselben Schriftgroesse wie die Strophe,
     nur leicht gedimmt (65 %), direkt unter der letzten Zeile (nur wenig mehr als der normale Zeilenabstand), nie umbrochen.
     Ist sie breiter als der Bildschirm, gilt fuer Strophe und Vorschau die kleinere Groesse (Strophe wird weich verkleinert).
   - Waehrend der letzten Zeile gleitet die Strophe nach Medienzeit hoch, bis die letzte Zeile etwa bei 42 % der Hoehe steht;
     obere Zeilen duerfen oben hinauslaufen. Die Uebersetzung blendet dabei aus, damit die Vorschau nichts ueberdeckt.
     Bei Pause steht alles. Nicht bei der letzten Strophe.
   - Am Wechselzeitpunkt wird die Vorschauzeile nahtlos zur ersten Zeile der neuen Strophe: die neue Strophe startet genau an
     der Stelle und in der Groesse der Vorschau und gleitet an ihren Platz, die alte laeuft oben hinaus (statt Animation v187). */
window.BPP_BUILD="1.91";
window.bppPv191=1;
(function(){
  if(window.bppV191) return; window.bppV191=1;
  var EASE="cubic-bezier(.45,0,.2,1)", DUR=550, OP=0.65, RAMP=0.6, TARGET=0.42;
  var css=document.createElement("style");
  css.textContent="#bppFsBox{transition:none!important;transform-origin:50% 0}"+
    "#bppFsPv191{position:absolute;left:0;right:0;top:0;text-align:center;white-space:nowrap;overflow:hidden;line-height:1.22;color:inherit;opacity:0;pointer-events:none;z-index:1;will-change:transform,opacity}"+
    "#bppFs.end #bppFsPv191,#bppFs.scr #bppFsPv191{display:none}"+
    ".bppG191 .gbox{transform-origin:50% 0}";
  document.head.appendChild(css);
  function yt(){ return typeof ytOn!=="undefined" && !!ytOn; }
  function P(){ return (typeof i!=="undefined" && i>=0)?PRAYERS[i]:null; }
  function clamp(x){ return x<0?0:(x>1?1:x); }
  function smooth(x){ x=clamp(x); return x*x*(3-2*x); }
  function reduced(){ try{ return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }catch(e){ return false; } }
  var lastYt=null, lastYtAt=0;
  function mediaT(){
    try{
      if(yt()){ if(typeof ytTime!=="number") return null; var now=performance.now();
        if(ytTime!==lastYt){ lastYt=ytTime; lastYtAt=now; }
        return (ytPlaying && now-lastYtAt<1500)?ytTime+(now-lastYtAt)/1000:ytTime; }
      if(a && a.src && isFinite(a.duration) && a.duration>=8) return a.currentTime||0;
    }catch(e){}
    return null;
  }
  var info=null, infoAt=0;
  function infoNow(){ var now=performance.now(); if(!info || now-infoAt>400){ infoAt=now; try{ var x=window.bppSwitchInfo?window.bppSwitchInfo():null; info=(x && x.B && x.B.length && x.E && x.E.length===x.B.length)?x:null; }catch(e){ info=null; } } return info; }
  function active(inf, t){ var j=0; for(var q=0;q<inf.E.length;q++){ if(inf.E[q]<=t+0.05) j=q; else break; } return j; }
  function linesOf(p, k){
    var g=stanzaGroups(p)[k], L=[]; if(!g) return L;
    g.idx.forEach(function(n){ String((p.zeilen[n]||{}).sa||"").split("\n").forEach(function(s){ s=s.trim(); if(s) L.push(s); }); });
    return L;
  }
  function fsState(){ try{ return window.bppFsState?window.bppFsState():null; }catch(e){ return null; } }
  /* Phase "letzte Zeile": Text der Vorschau, Beginn (Medienzeit) und Wechselzeitpunkt */
  function phase(s, t){
    var p=P(); if(!p || !s.timed || t===null || !window.bppLineSched) return null;
    var inf=infoNow(); if(!inf) return null;
    var j=active(inf, t), k=inf.B[j].k;
    if(k!==s.k && j>0 && inf.B[j-1].k===s.k && t<inf.E[j]+0.8){ j=j-1; k=s.k; }
    if(k!==s.k) return null;
    var L=linesOf(p, k); if(!L.length) return null;
    var pages=s.pages||1, pg=s.page||0, cut=(pages>1)?(s.cut||0):0;
    var onFirst=(pages>1 && pg===0 && cut>0 && cut<L.length), lastIdx=onFirst?cut-1:L.length-1, text=null;
    if(onFirst) text=L[cut]; else if(j+1<inf.B.length) text=linesOf(p, inf.B[j+1].k)[0]||null;
    if(!text) return null;
    var sc=window.bppLineSched(j, inf, L); if(!sc) return null;
    var from=sc.start[lastIdx], endT=onFirst?(sc.end[cut-1]+0.1):inf.E[j+1];
    var firstIdx=onFirst?0:(pages>1?cut:0);
    if(lastIdx===firstIdx){ var e0=onFirst?sc.end[cut-1]:sc.e; from=from+0.5*Math.max(0, e0-from); }
    if(from==null || !(endT>0) || !(t>=from-0.05 && t<endT+0.8)) return null;
    return {text:text, from:from, endT:endT};
  }
  var stage=null, box=null, pv=null, pvSpan=null, geo=null, live=null, dirty=false, snap=null;
  function relTop(el){ var y=0; while(el && el!==stage){ y+=el.offsetTop; el=el.offsetParent; } return y; }
  function take(){ var s=fsState(), p=P(); return {html:box.innerHTML, fs:box.style.fontSize, st:(s?s.k+"/"+s.page:"")+"/"+(p?p.id:""), txt:box.textContent}; }
  function ensure(){
    var st=document.getElementById("bppFsStage"), bx=document.getElementById("bppFsBox"); if(!st || !bx) return false;
    if(st!==stage || bx!==box){ stage=st; box=bx; geo=null; live=null;
      pv=document.createElement("div"); pv.id="bppFsPv191"; pv.setAttribute("aria-hidden","true"); pvSpan=document.createElement("span"); pv.appendChild(pvSpan); stage.appendChild(pv);
      new MutationObserver(onMut).observe(box,{childList:true, subtree:true, characterData:true}); snap=take(); }
    return true;
  }
  /* Masse einer Phase: Groesse (kleinere von Strophe und Vorschau), Hochrueck-Weg */
  function geom(text){
    var fs=parseFloat(box.style.fontSize)||24, W=stage.clientWidth, H=stage.clientHeight;
    var key=text+"|"+fs+"|"+W+"x"+H+"|"+box.innerHTML.length;
    if(geo && geo.key===key) return geo;
    var vls=box.querySelectorAll(".vl"), last=vls[vls.length-1]; if(!last) return null;
    if(pvSpan.textContent!==text) pvSpan.textContent=text;
    pv.style.fontSize=fs+"px";
    var pw=pvSpan.offsetWidth||1, sc=Math.min(1, (W-2)/pw);
    var bt=relTop(box), yLt=relTop(last)-bt, yLb=yLt+last.offsetHeight;
    var pf=fs*sc, gap=pf*0.12, ph=pf*1.22;
    var dyC=bt+sc*(yLt+yLb)/2-H*TARGET, dyF=bt+sc*yLb+gap+ph-(H-4);
    geo={key:key, fs:fs, sc:sc, bt:bt, yLb:yLb, dyMax:Math.max(0, dyC, dyF)};
    return geo;
  }
  function ftrOp(v){ var f=box.querySelector(".ftr"); if(f) f.style.opacity=v; }
  function reset(){
    if(!dirty) return; dirty=false; live=null;
    if(box){ box.style.translate=""; box.style.scale=""; ftrOp(""); }
    if(pv){ pv.style.opacity="0"; }
  }
  function frame(){
    requestAnimationFrame(frame);
    var s=fsState(), ov=document.getElementById("bppFs");
    if(!s || !s.on || !ov || ov.classList.contains("scr") || ov.classList.contains("end") || !ensure()){ reset(); return; }
    var t=mediaT(), ph=null; try{ ph=phase(s, t); }catch(e){ ph=null; }
    if(!ph){ reset(); return; }
    var g=geom(ph.text); if(!g){ reset(); return; }
    var e=smooth((t-ph.from)/Math.max(0.3, ph.endT-ph.from)), er=smooth((t-ph.from)/RAMP);
    /* Vorschau gleich in der gemeinsamen Groesse (kein Abschneiden beim Einblenden); die Strophe schrumpft in 0,6 s auf dieselbe Groesse */
    var sc=1-(1-g.sc)*er, dy=g.dyMax*e, pf=g.fs*g.sc, top=g.bt+sc*g.yLb-dy+pf*0.12, op=OP*er;
    box.style.translate=dy>0.05?("0 "+(-dy).toFixed(2)+"px"):""; box.style.scale=sc<0.999?sc.toFixed(4):"";
    ftrOp(String(1-er));
    if(pvSpan.textContent!==ph.text) pvSpan.textContent=ph.text;
    pv.style.fontSize=pf.toFixed(2)+"px"; pv.style.transform="translateY("+(top+(1-er)*0.25*pf).toFixed(2)+"px)"; pv.style.opacity=op.toFixed(3);
    live={text:ph.text, pvTop:top, pf:pf, dy:dy, sc:sc, op:op, st:s.k+"/"+s.page}; dirty=true;
  }
  function norm(s){ return String(s||"").replace(/\s+/g," ").trim(); }
  function onMut(){
    var prev=snap, lv=live; snap=take(); geo=null;
    if(!prev || prev.st===snap.st || prev.txt===snap.txt) return;
    var run=function(){ afterSwitch(prev, lv); };
    if(window.queueMicrotask) queueMicrotask(run); else Promise.resolve().then(run);
  }
  /* nach allen MutationObservern (auch v187): Wechsel nahtlos aus der Vorschau oder die v187-Animation mit der verschobenen alten Strophe */
  function afterSwitch(prev, lv){
    box.style.translate=""; box.style.scale=""; if(pv) pv.style.opacity="0"; live=null; dirty=false;
    var first=box.querySelector(".vl");
    var seamless=!!(lv && lv.op>0.05 && first && norm(first.textContent)===norm(lv.text) && box.animate && !reduced());
    if(!seamless){
      if(lv){ var g0=stage.querySelector(".bppGhost:not(.bppG191) .gbox"); if(g0){ g0.style.transformOrigin="50% 0"; if(lv.dy>0.05) g0.style.translate="0 "+(-lv.dy)+"px"; if(lv.sc<0.999) g0.style.scale=String(lv.sc); var f0=g0.querySelector(".ftr"); if(f0) f0.style.opacity="0"; } }
      return;
    }
    box.getAnimations().forEach(function(x){ try{ x.cancel(); }catch(e){} });
    Array.prototype.forEach.call(stage.querySelectorAll(".bppGhost"), function(n){ n.parentNode.removeChild(n); });
    var gh=document.createElement("div"); gh.className="bppGhost bppG191"; gh.setAttribute("aria-hidden","true");
    var gb=document.createElement("div"); gb.className="gbox"; gb.innerHTML=prev.html; gb.style.fontSize=prev.fs;
    if(lv.dy>0.05) gb.style.translate="0 "+(-lv.dy)+"px"; if(lv.sc<0.999) gb.style.scale=String(lv.sc);
    var gf=gb.querySelector(".ftr"); if(gf) gf.style.opacity="0";
    gh.appendChild(gb); stage.appendChild(gh);
    var bt=relTop(box), y1=relTop(first)-bt, fsN=parseFloat(box.style.fontSize)||lv.pf, s0=lv.pf/fsN;
    var d0=lv.pvTop-bt-s0*y1, D=(bt+y1)-lv.pvTop, gD=Math.min(D, -0.15*stage.clientHeight);
    box.animate([{transform:"translateY("+d0.toFixed(2)+"px) scale("+s0.toFixed(4)+")"},{transform:"translateY(0) scale(1)"}],{duration:DUR, easing:EASE});
    first.animate([{opacity:OP},{opacity:1}],{duration:DUR, easing:EASE});
    Array.prototype.forEach.call(box.children, function(c){ if(c!==first) c.animate([{opacity:0},{opacity:1}],{duration:DUR, easing:"ease-in"}); });
    var ga=gh.animate([{transform:"translateY(0)", opacity:1},{transform:"translateY("+gD.toFixed(2)+"px)", opacity:0}],{duration:Math.round(DUR*0.8), easing:EASE, fill:"forwards"});
    ga.onfinish=function(){ if(gh.parentNode) gh.parentNode.removeChild(gh); };
    window.bppLastSeam={d0:d0, s0:s0, D:D, pvTop:lv.pvTop, pf:lv.pf, fsN:fsN};
  }
  requestAnimationFrame(frame);
  window.addEventListener("resize", function(){ geo=null; });
  window.bppPreviewInfo=function(){ return {text:live?live.text:null, on:!!(live && live.op>0.3), op:live?live.op:0, pvFs:live?live.pf.toFixed(2)+"px":null,
    boxFs:(box?parseFloat(box.style.fontSize):0)*(live?live.sc:1), shift:live?{dy:+live.dy.toFixed(1), sc:+live.sc.toFixed(3)}:null, pvTop:live?live.pvTop:null}; };
})();
