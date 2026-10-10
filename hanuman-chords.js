/* [Grok.com] Akkorde aus dem Heft ueber jeder Zeile, Hanuman und die anderen Gesaenge. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var H4=["D                    C","G                    D","                     C","G                    D"];
  function split(P, map){
    if(!P||!P.zeilen||P._lineCh) return;
    var out=[];
    P.zeilen.forEach(function(z){
      var lines=String(z.sa||"").split("\n");
      if(lines.length<2){ out.push(z); return; }
      lines.forEach(function(s,i){
        var ch=map?map(z,i,lines):(z.ch||"");
        out.push({nr:String(z.nr)+(i?String.fromCharCode(97+i):"a"), ch:ch, sa:s, ue:i===0?(z.ue||""):"", en:i===0?(z.en||""):"", x2:i===lines.length-1?z.x2:false});
      });
    });
    P.zeilen=out; P._lineCh=1;
  }
  var H=PRAYERS.find(function(p){ return p.id==="hanuman"; });
  split(H, function(z,i,lines){
    if(/^Kirtan|^Kīrtan/i.test(z.nr)) return i===0?"D                    C":"G                    D";
    if(String(z.nr)==="25") return ["D                    A","D","D","D"][i]||"D";
    if(lines.length===4) return H4[i]||"";
    return z.ch||"";
  });
  PRAYERS.forEach(function(P){
    if(P.id==="hanuman") return;
    split(P, function(z,i,lines){
      var parts=String(z.ch||"").trim().split(/\s{2,}/).filter(Boolean);
      if(parts.length===lines.length) return parts[i];
      if(parts.length>1 && i<parts.length) return parts[i];
      return i===0?(z.ch||""):"";
    });
  });
})();
