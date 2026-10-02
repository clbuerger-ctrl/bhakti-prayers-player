/* [Grok-Bot] V1.52: Taste "Analyse": ermittelt aus der MP3 den Zeilentakt (Lautstaerke-Einbrueche) und den ersten Einsatz und setzt damit die Strophenanfaenge
   fuer den Autoscroll (pro Geraet gemerkt). Danach mit N an einzelnen Stellen nachkorrigieren. Nur fuer MP3, nicht fuer YouTube. */
(function(){
  function el(id){ return document.getElementById(id); }
  function say(t){ var h=el("hint"); if(h) h.textContent=t; }
  function de(){ return (typeof lang==="undefined" || lang!=="en"); }
  function label(b, t){ b.textContent=t; }
  function audioUrl(u){ return String(u||"").replace("://www.dropbox.com/","://dl.dropboxusercontent.com/"); }

  /* Lautstaerke je 50 ms (dB), leicht geglaettet */
  function envelope(buf){
    var sr=buf.sampleRate, hop=Math.round(sr*0.05), n=Math.floor(buf.length/hop), ch=buf.numberOfChannels;
    var data=[]; for(var c=0;c<ch;c++) data.push(buf.getChannelData(c));
    var e=new Float32Array(n);
    for(var f=0;f<n;f++){
      var s=0, o=f*hop;
      for(var k=0;k<hop;k++){ var v=0; for(var c2=0;c2<ch;c2++) v+=data[c2][o+k]; v/=ch; s+=v*v; }
      e[f]=10*Math.log10(s/hop+1e-10);
    }
    var sm=new Float32Array(n);
    for(var f2=0;f2<n;f2++){ var a0=0, m=0; for(var d=-1;d<=1;d++){ var q=f2+d; if(q>=0&&q<n){ a0+=e[q]; m++; } } sm[f2]=a0/m; }
    return sm;
  }
  /* Einbrueche gegenueber dem gleitenden Median (4 s): dort beginnt meist eine neue Zeile */
  function dips(sm){
    var n=sm.length, W=40, rel=new Float32Array(n), win=[];
    for(var f=0;f<n;f++){
      win.length=0;
      for(var q=Math.max(0,f-W);q<=Math.min(n-1,f+W);q++) win.push(sm[q]);
      win.sort(function(x,y){ return x-y; });
      rel[f]=sm[f]-win[win.length>>1];
    }
    var s=new Float32Array(n); for(var f1=0;f1<n;f1++) s[f1]=Math.max(0,-rel[f1]);
    var C=[], V=[];
    for(var f2=1;f2<n-1;f2++){
      if(s[f2]>=3 && s[f2]>=s[f2-1] && s[f2]>=s[f2+1]){
        var g=f2; while(g<n-1 && rel[g]<-1.5) g++;
        var t=g*0.05, v=s[f2];
        if(C.length && t-C[C.length-1]<0.4){ if(v>V[V.length-1]){ C[C.length-1]=t; V[V.length-1]=v; } }
        else { C.push(t); V.push(v); }
      }
    }
    return { s:s, C:C, V:V };
  }
  /* Zeilentakt aus der Autokorrelation (1,5 bis 8 s), verfeinert ueber das 8- bzw. 4-fache */
  function linePeriod(s){
    var n=s.length, mean=0; for(var f=0;f<n;f++) mean+=s[f]; mean/=n;
    var z=new Float32Array(n); for(var f1=0;f1<n;f1++) z[f1]=s[f1]-mean;
    function ac(l){ var a=0; for(var f=0;f+l<n;f++) a+=z[f]*z[f+l]; return a; }
    var best=-1e18, T0=0;
    for(var l=30;l<=160;l++){ var v=ac(l); if(v>best){ best=v; T0=l; } }
    var T=T0*0.05;
    [8,4].some(function(k){
      var lo=Math.floor(k*T0*0.95), hi=Math.ceil(k*T0*1.05); if(hi>=n) return false;
      var b2=-1e18, L2=0; for(var l2=lo;l2<=hi;l2++){ var v2=ac(l2); if(v2>b2){ b2=v2; L2=l2; } }
      T=L2*0.05/k; return true;
    });
    return T;
  }
  function nearest(C, t, tol){ var j=-1, d=tol; for(var k=0;k<C.length;k++){ var dd=Math.abs(C[k]-t); if(dd<=d){ d=dd; j=k; } if(C[k]>t+tol) break; } return j; }
  function syll(t){ return Math.max((String(t).match(/(ai|au|[aāiīuūṛṝḷeoAĀIĪUŪEO])/g)||[]).length, 3); }

  function analyse(P, buf){
    var gs=stanzaGroups(P), G=gs.length, sm=envelope(buf), D=dips(sm), C=D.C, V=D.V, dur=buf.duration;
    if(C.length<8) return null;
    /* Zeilen mit Silbengewicht, Strophenanfang = erste Zeile der Strophe */
    var lines=[], first=[];
    gs.forEach(function(g){
      first.push(lines.length);
      g.idx.forEach(function(n){ String(P.zeilen[n].sa||"").split("\n").forEach(function(t){ if(t.trim()) lines.push(syll(t.replace(/:\/\//g,""))*(/:\/\//.test(t)?2:1)); }); });
    });
    var mean=0; lines.forEach(function(x){ mean+=x; }); mean/=lines.length;
    var w=lines.map(function(x){ return Math.min(4.4, Math.max(0.45, x/mean)); });
    var T=linePeriod(D.s);
    /* Einsatz: erster Einbruch, nach dem 7 von 8 Zeilen im Takt folgen (ueberspringt Intro wie "Om") */
    function reg(t0){ var t=t0, h=0; for(var k=0;k<8;k++){ var step=T, j=nearest(C, t+step, 0.4); if(j>=0){ t=C[j]; h++; } else t+=step; } return h; }
    var t0=null; for(var c=0;c<C.length && C[c]<dur*0.6;c++){ if(reg(C[c])>=7){ t0=C[c]; break; } }
    if(t0==null) t0=C[0];
    var pos=[t0], t=t0, r=T, hits=0;
    for(var k=0;k<lines.length-1;k++){
      var tgt=t+r*w[k], j=-1, bs=-1e9;
      for(var q=0;q<C.length;q++){ var d=Math.abs(C[q]-tgt); if(d<=0.3){ var sc=V[q]-6*d; if(sc>bs){ bs=sc; j=q; } } if(C[q]>tgt+0.3) break; }
      var nt=tgt;
      if(j>=0){ hits++; nt=0.5*C[j]+0.5*tgt; r=0.9*r+0.1*((C[j]-t)/w[k]); }
      t=nt; pos.push(t);
    }
    /* Ende der Aufnahme: letzter lauter Abschnitt; laeuft die Schaetzung darueber hinaus, wird sie gestaucht */
    var thr=0, srt=Array.prototype.slice.call(sm).sort(function(x,y){ return x-y; }); thr=srt[Math.floor(srt.length*0.1)]+6;
    var endT=dur; for(var f=sm.length-1;f>=0;f--){ if(sm[f]>thr){ endT=f*0.05; break; } }
    var lastLine=pos[pos.length-1]+r*w[w.length-1];
    if(lastLine>endT && lastLine>t0){ var kf=(endT-t0)/(lastLine-t0); pos=pos.map(function(x){ return t0+(x-t0)*kf; }); }
    window.bppAnaInfo={ T:T, t0:t0, dips:C.length, squeezed:lastLine>endT, hit:Math.round(100*hits/Math.max(1,lines.length-1)) };
    return first.map(function(li){ return Math.round(Math.max(0, pos[li]-0.1)*10)/10; });
  }

  window.bppAnalyse=function(){
    var b=el("btnAna");
    if(typeof i==="undefined" || i<0){ say(de()?"Erst einen Gesang wählen.":"Choose a prayer first."); return; }
    var P=PRAYERS[i];
    if(ytOn || !P.audio){ say(de()?"Analyse geht nur mit MP3-Ton, nicht mit YouTube. Strophen hier mit N setzen.":"Analysis needs MP3 audio, not YouTube. Set stanzas with N."); return; }
    if(P.marksFile && P.marksFile.length){
      bppSaveUserMarks(P.id, {});
      if(!autoScroll) toggleAuto();
      applyUI(); paintLyrics();
      say(de()?"Für diesen Gesang sind die Strophenanfänge schon fest aus der Aufnahme ermittelt. Eigene Korrekturen sind zurückgesetzt, mit N kannst du neu korrigieren.":"Stanza starts for this prayer are already taken from the recording. Your corrections were reset, press N to correct again.");
      return;
    }
    label(b, de()?"Analyse …":"Analysing …"); b.disabled=true;
    say(de()?"Lade und analysiere die Aufnahme …":"Loading and analysing the recording …");
    fetch(audioUrl(P.audio)).then(function(r){ if(!r.ok) throw new Error("HTTP "+r.status); return r.arrayBuffer(); })
    .then(function(ab){
      var Ctx=window.OfflineAudioContext||window.webkitOfflineAudioContext;
      var ctx=new Ctx(1, 1, 8000);
      return new Promise(function(res, rej){ var pr=ctx.decodeAudioData(ab, res, rej); if(pr && pr.then) pr.then(res, rej); });
    })
    .then(function(buf){
      var st=analyse(P, buf);
      if(!st) throw new Error(de()?"zu wenige Zeileneinsätze gefunden":"too few line onsets found");
      var inf=window.bppAnaInfo||{};
      if(inf.hit<40){
        label(b, "Analyse");
        say(de()?"Analyse unsicher: Die Aufnahme ist zu unregelmäßig (Wiederholungen, freier Gesang). Nichts geändert. Bitte beim Hören an jedem Strophenanfang N drücken, das wird gemerkt.":"Analysis uncertain: the recording is too irregular. Nothing changed. Press N at each stanza start while listening; it is remembered.");
        window.bppLastAnalysis="unsicher"; return;
      }
      var m={}; st.forEach(function(t,g){ m[g]=t; });
      bppSaveUserMarks(P.id, m);
      if(!autoScroll) toggleAuto();
      try{ autoLineFromTime(); }catch(e){}
      applyUI(); paintLyrics();
      label(b, (de()?"Analyse ✓ ":"Analysis ✓ ")+st.length);
      say((de()?"Analyse fertig: "+st.length+" Strophenanfänge gesetzt. Wo es nicht passt, beim richtigen Einsatz N drücken (oder die Strophe anklicken), das korrigiert die Stelle.":"Analysis done: "+st.length+" stanza starts set. Where it is off, press N (or click the stanza) at the right moment to correct it."));
      window.bppLastAnalysis=st;
    })
    .catch(function(e){
      label(b, de()?"Analyse":"Analyse");
      say((de()?"Analyse nicht möglich: ":"Analysis failed: ")+(e && e.message || e));
    })
    .then(function(){ b.disabled=false; setTimeout(function(){ label(b, de()?"Analyse":"Analyse"); }, 6000); });
  };

  function addButton(){
    if(el("btnAna")) return;
    var ref=el("btnScUp"); if(!ref) return;
    var b=document.createElement("button");
    b.type="button"; b.id="btnAna"; b.textContent="Analyse";
    b.title="Strophenanfänge aus der Aufnahme ermitteln, danach mit N nachkorrigieren";
    b.onclick=function(){ window.bppAnalyse(); };
    ref.parentNode.insertBefore(b, ref.nextSibling);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", addButton); else addButton();
})();
