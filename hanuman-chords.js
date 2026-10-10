/* [Grok.com] Strophe bleibt ein Block. Bei AkkZe steht der Akkord ueber jeder Zeile. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var H4=["D                    C","G                    D","                     C","G                    D"];
  function mark(P, map){
    if(!P||!P.zeilen) return;
    P.zeilen.forEach(function(z){
      var lines=String(z.sa||"").split("\n");
      if(lines.length<2) return;
      z.lineCh=lines.map(function(s,i){ return map(z,i,lines); });
    });
  }
  var H=PRAYERS.find(function(p){ return p.id==="hanuman"; });
  mark(H, function(z,i,lines){
    if(/^Kirtan|^Kīrtan/i.test(z.nr)) return i===0?"D                    C":"G                    D";
    if(String(z.nr)==="25") return ["D                    A","D","D","D"][i]||"D";
    if(lines.length===4) return H4[i]||"";
    return i===0?(z.ch||""):"";
  });
  PRAYERS.forEach(function(P){
    if(P.id==="hanuman" || P.id==="govinda") return; /* [Grok.com] Govinda hat die Akkorde von Strophe 1 */
    if(P.id==="govinda"){
      P.zeilen.forEach(function(z){
        if(/^Refrain/i.test(z.nr)) return;
        var s=String(z.sa||"");
        if(s.indexOf(" | ")<0 && s.indexOf("\n")<0) return;
        var bits=s.split(" | ");
        var lines=[];
        bits.forEach(function(b){
          b=b.trim();
          var w=b.split(/\s+/);
          if(w.length>6){ var mid=Math.ceil(w.length/2); lines.push(w.slice(0,mid).join(" ")); lines.push(w.slice(mid).join(" ")); }
          else if(b) lines.push(b);
        });
        if(lines.length>1) z.sa=lines.join("\n");
        var parts=String(z.ch||"").trim().split(/\s+/).filter(Boolean);
        if(parts.length) z.lineCh=lines.map(function(_,i){ return parts[Math.min(i, parts.length-1)]; });
      });
    }
    P.zeilen.forEach(function(z){
      if(P.id==="govinda") return;
      if(String(z.sa||"").indexOf(" | ")<0) return;
      var bits=String(z.sa).split(" | ");
      if(bits.length<2) return;
      z.sa=bits.join("\n");
    });
    mark(P, function(z,i,lines){
      var parts=String(z.ch||"").trim().split(/\s+/).filter(Boolean);
      if(parts.length===lines.length) return parts[i];
      if(parts.length>1) return parts[Math.min(i, parts.length-1)];
      return i===0?(z.ch||""):"";
    });
  });
})();
