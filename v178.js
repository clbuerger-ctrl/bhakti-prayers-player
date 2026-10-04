/* [Grok-Bot] V1.78
   Akkorde nach "Morning Prayer SVD with Chords" (Sri Vitthal Dham, V0424K, S. 17; Dropbox 03 Bhakti Marga/05 Prayers Bhajan Vedic Chants/02 Prayers):
   1) Giridhari Arati (Mhane Chakar Rakho Ji): Akkorde je Zeile wie im Heft (C G C F, Schlusszeilen C G C, "chakar rakho ..." F C G C).
   2) Sri Vishnu Bhagavan Arati, Strophen 2-9: Akkorde wie im Heft (C / F G / F G / (G) F C / G F / G F C). Die in V1.77 nur abgeleiteten Akkorde sind damit ersetzt.
      Strophe 1 bleibt wie bisher. */
window.BPP_BUILD="1.78";
(function(){
  if(typeof PRAYERS==="undefined") return;
  var G=PRAYERS.find(function(p){ return p.id==="giridhari-arati"; });
  if(G && G.zeilen){
    var A="C   G   C   F", E="C   G   C";
    var CH={"1a":A,"1b":A,"2a":A,"2b":E,"3a":"F","3b":"C","3c":"G   C","4a":A,"4b":A,"5a":A,"5b":A,"6a":A,"6b":E};
    G.zeilen.forEach(function(z){ if(CH[z.nr]) z.ch=CH[z.nr]; });
    G.quelle="Prathana SVD S. 28 \u00b7 Akkorde: Morning Prayer SVD with Chords (V0424K) S. 17";
  }
  var V=PRAYERS.find(function(p){ return p.id==="vishnu-arati"; });
  if(V && V.zeilen){
    var S6=["C","F   G","F   G","(G)   F   C","G   F","G   F   C"];
    var S7=["C","F   G","F   G","(G)   F   C","(G)   F   C","G   F","G   F   C"];
    var by={};
    V.zeilen.forEach(function(z){ var m=String(z.nr).match(/^(\d+)([a-g])$/); if(m && m[1]!=="1"){ (by[m[1]]=by[m[1]]||[]).push(z); } });
    Object.keys(by).forEach(function(k){ var L=by[k], C=L.length===7?S7:(L.length===6?S6:null); if(C) L.forEach(function(z,j){ z.ch=C[j]; }); });
    if((V.quelle||"").indexOf("V0424K")<0) V.quelle=(V.quelle||"")+" \u00b7 Akkorde Str. 2-9: Morning Prayer SVD with Chords (V0424K) S. 17";
  }
})();
