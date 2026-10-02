/* [Grok-Bot] V1.52: Prayer-Liste kompakt (nur Titel); Taste "Details" blendet Quellen ein, wird pro Geraet gemerkt.
   Liste gegliedert wie im Prathana-Heft: Morgengebet, Abendgebet, Weitere. Titel des laufenden Gebets steht ueber den Lyrics. Erklaertexte (Tooltip) fuer alle Tasten. Hinweise "Strophen wie im Heft ..." entfallen. */
(function(){
  var st=document.createElement("style");
  st.textContent="body:not(.show-det) .list .quelle{display:none}body:not(.show-det) .list{gap:4px}body:not(.show-det) .list .item{padding:5px 9px;min-height:30px;font-size:.92rem}@media(min-width:800px){body:not(.show-det) .list{grid-template-columns:repeat(4,1fr)}}.listbar{margin:8px 12px 0;display:flex;justify-content:flex-end}.list .grp{grid-column:1/-1;color:var(--gold);font-size:.8rem;letter-spacing:.06em;text-transform:uppercase;margin:6px 2px 0}.list .grp:first-child{margin-top:0}#lyrTitle{margin:0 12px -4px;color:var(--gold);font-family:'Gentium Book Plus',Georgia,serif;font-size:1.15rem}#lyrTitle small{color:var(--muted);font-family:'Source Sans 3',sans-serif;font-size:.75rem;margin-left:.6em;letter-spacing:.04em}#lyrTitle:empty{display:none}.listbar button{padding:3px 9px;min-height:26px;font-size:.8rem;border-radius:6px}";
  document.head.appendChild(st);
  var on=false; try{ on=localStorage.getItem("bpp-det")==="1"; }catch(e){}
  document.body.classList.toggle("show-det", on);
  var list=document.getElementById("list"); if(!list) return;
  var bar=document.createElement("div"); bar.className="listbar";
  var b=document.createElement("button"); b.type="button"; b.id="btnDet";
  function lab(){ var de=(typeof lang==="undefined"||lang!=="en"); b.textContent=on?(de?"Details aus":"Hide details"):(de?"Details":"Details"); b.classList.toggle("on", on); }
  b.onclick=function(){ on=!on; document.body.classList.toggle("show-det", on); try{ localStorage.setItem("bpp-det", on?"1":"0"); }catch(e){} lab(); };
  bar.appendChild(b); list.parentNode.insertBefore(bar, list); lab();
  var GROUPS=[
    { de:"Morgengebet", en:"Morning prayers", ids:["guru-stotram","guruji-gayatri","gayatri","ganesha-mantra","suprabhatam","govinda","narasimha","ramanuja","vishnu-arati","final-prayers"] },
    { de:"Abendgebet", en:"Evening prayers", ids:["guru-stotram-abend","kavacham","bhajare","vishnu-arati"] }
  ];
  function regroup(){
    var btns=Array.prototype.slice.call(list.querySelectorAll("button.item"));
    if(btns.length!==PRAYERS.length) return;
    var de=(typeof lang==="undefined"||lang!=="en"), used={}, frag=document.createDocumentFragment();
    function head(t){ var h=document.createElement("div"); h.className="grp"; h.textContent=t; frag.appendChild(h); }
    function put(idx){
      var b0=btns[idx], node=b0;
      if(used[idx]){ node=b0.cloneNode(true); }
      node.onclick=function(){ play(idx, true); };
      used[idx]=true; frag.appendChild(node);
    }
    GROUPS.forEach(function(G){
      head(de?G.de:G.en);
      G.ids.forEach(function(id){ var idx=PRAYERS.findIndex(function(p){ return p.id===id; }); if(idx>=0) put(idx); });
    });
    var rest=[]; PRAYERS.forEach(function(p, idx){ if(!used[idx]) rest.push(idx); });
    if(rest.length){ head(de?"Weitere":"More"); rest.forEach(put); }
    list.innerHTML=""; list.appendChild(frag);
    title();
  }
  var tt=document.createElement("div"); tt.id="lyrTitle";
  var stg=document.getElementById("stage"); if(stg) stg.parentNode.insertBefore(tt, stg);
  function title(){
    if(typeof i==="undefined" || i<0 || !PRAYERS[i]){ tt.textContent=""; return; }
    var P=PRAYERS[i], de=(typeof lang==="undefined"||lang!=="en"), grp="";
    GROUPS.forEach(function(G){ if(!grp && G.ids.indexOf(P.id)>=0) grp=de?G.de:G.en; });
    tt.innerHTML="";
    tt.appendChild(document.createTextNode(P.titel));
    if(grp){ var sm=document.createElement("small"); sm.textContent=grp; tt.appendChild(sm); }
  }
  var TIPS={
    btnPlay:["Abspielen / Pause (Leertaste)","Play / pause (Space)"],
    btnPrev:["Eine Strophe zurück (Taste V)","One stanza back (key V)"],
    btnNext:["Nächste Strophe (Taste N). Bei laufendem Ton: hier beginnt die Strophe, wird gemerkt","Next stanza (key N). While playing: the stanza starts here, remembered"],
    btnAuto:["Automatisch mitscrollen, die Lyrics folgen der Aufnahme","Scroll automatically with the recording"],
    btnScDown:["Autoscroll langsamer","Auto scroll slower"],
    btnScUp:["Autoscroll schneller","Auto scroll faster"],
    btnAna:["Strophenanfänge aus der Aufnahme ermitteln, danach mit N nachkorrigieren","Find stanza starts in the recording, then correct with N"],
    btnDe:["Übersetzung unter den Versen ein / aus","Show / hide translation below the verses"],
    btnCh:["Akkorde über den Versen ein / aus","Show / hide chords above the verses"],
    btnXpDown:["Akkorde einen Halbton tiefer","Chords one semitone down"],
    btnXpUp:["Akkorde einen Halbton höher","Chords one semitone up"],
    btnXpZero:["Originaltonart wie im Heft","Original key as in the booklet"],
    btnLangDe:["Bedienung und Übersetzung auf Deutsch","Controls and translation in German"],
    btnLangEn:["Bedienung und Übersetzung auf Englisch","Controls and translation in English"],
    btnDet:["Quelle und Fortsetzungsstelle in der Liste ein / aus","Show / hide source and resume point in the list"]
  };
  function tips(){
    var k=(typeof lang!=="undefined"&&lang==="en")?1:0;
    Object.keys(TIPS).forEach(function(id){ var e=document.getElementById(id); if(e) e.title=TIPS[id][k]; });
  }
  var NOHINT=/^(Jede Strophe|Strophen|Zeilen wie im|Stanzas as in|Each verse in)/;
  PRAYERS.forEach(function(P){ ["hinweis","hinweisDe","hinweisEn"].forEach(function(k){ if(NOHINT.test(String(P[k]||""))) P[k]=""; }); });
  document.addEventListener("DOMContentLoaded", function(){
    var pl=window.paintList; if(typeof pl==="function"){ window.paintList=function(){ pl.apply(this, arguments); regroup(); }; }
    regroup();
    var orig=window.applyUI; if(typeof orig==="function"){ window.applyUI=function(){ orig.apply(this, arguments); lab(); tips(); }; } lab(); tips(); });
})();
