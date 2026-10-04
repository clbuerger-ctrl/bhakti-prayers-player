/* [Grok-Bot] V1.77
   1) Tasten "−  ×1.00  +" (Tempo der geschaetzten Strophen) bei allen Prayers ausgeblendet. Das Schaetz-Tempo steht fest auf 1,
      ein frueher gemerkter Wert wirkt nicht mehr. Zeitmarken, Abfolgen und N/V bleiben unveraendert.
   2) Sri Vishwananda Bhajare (Arati): Text nach Prathana (EN-PDF S. 33): Eingangs-Refrain zweimal (4 Zeilen), "…" in Chakar c entfernt.
      Strophenabfolge der MP3 gemessen (Whisper large-v3-turbo, Zeilen-Ausrichtung je 6-s-Fenster, Schritt 2 s).
   3) Versionspruefung: version.json wird ohne Cache gelesen; ist der Stand neuer als BPP_BUILD, erscheint ein Hinweis "Neu laden". */
window.BPP_BUILD="1.77";
(function(){
  var st=document.createElement("style");
  st.textContent="#btnScDown,#scLab,#btnScUp{display:none!important}"+
    "#bppNew{position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:10000;background:#e8c57a;color:#222;padding:7px 12px;border-radius:8px;font-size:.9rem;box-shadow:0 2px 8px rgba(0,0,0,.4)}"+
    "#bppNew button{margin-left:10px;font:inherit;font-weight:600;padding:2px 9px;border-radius:6px;border:1px solid #222;background:#222;color:#e8c57a;cursor:pointer}";
  (document.head||document.documentElement).appendChild(st);
  if(typeof PRAYERS==="undefined") return;
  var rt=window.restoreTempo;
  if(typeof rt==="function"){ window.restoreTempo=function(){ var r=rt.apply(this, arguments); try{ scrollTempo=1; scrollTempo2=0; splitTime=-1; splitIdx=-1; }catch(e){} return r; }; }
  var B=PRAYERS.find(function(p){ return p.id==="bhajare"; });
  if(B && B.zeilen){
    var R="Sri Vishwananda Bhajare\nSwami Vishwananda Bhajare";
    B.zeilen.forEach(function(z){
      if(z.nr==="Refrain") z.sa=R+"\n"+R;
      if(z.nr==="Chakar c") z.sa=String(z.sa).replace(/,\s*\u2026/g, ",");
    });
    /* Gruppen: 0 Refrain (mit Vorspiel), 1-6 Strophen (je mit Refrain), 7 Chakar Rakho. Keine Ruecksprunge in der Aufnahme. */
    B.seqFile=[[0,0],[33,1],[52.5,2],[81,3],[110.5,4],[140.5,5],[170,6],[214.5,7]];
    if((B.quelle||"").indexOf("Prathana (EN)")<0) B.quelle=(B.quelle||"")+" \u00b7 Text nach Prathana (EN) S. 33";
  }
  function check(){
    try{
      fetch("version.json?t="+Date.now(), {cache:"no-store"}).then(function(r){ return r.ok?r.json():null; }).then(function(j){
        if(!j || !j.v || j.v===window.BPP_BUILD) return;
        var a=String(j.v).split(".").map(Number), b=String(window.BPP_BUILD).split(".").map(Number);
        var newer=(a[0]>b[0]) || (a[0]===b[0] && (a[1]||0)>(b[1]||0)); if(!newer || document.getElementById("bppNew")) return;
        var d=document.createElement("div"); d.id="bppNew"; d.textContent="Neue Version V"+j.v+" verf\u00fcgbar";
        var btn=document.createElement("button"); btn.type="button"; btn.textContent="Neu laden"; btn.onclick=function(){ location.reload(); };
        d.appendChild(btn); document.body.appendChild(d);
      }).catch(function(){});
    }catch(e){}
  }
  document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V"+window.BPP_BUILD; document.title="Bhakti Prayers Player V"+window.BPP_BUILD; }, 500);
    setTimeout(check, 3000); setInterval(check, 15*60*1000);
    document.addEventListener("visibilitychange", function(){ if(!document.hidden) check(); });
  });
})();
