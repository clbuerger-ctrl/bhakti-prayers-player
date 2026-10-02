/* [Grok-Bot] V1.61: Taste "Alle" zeigt alle Prayers ohne Tagesfilter. */
/* [Grok-Bot] V1.60: Ablauf je Wochentag (Wochenuebersicht Prathana-Heft Version 10), Tagesauswahl, fehlende Gebete grau. */
/* [Grok-Bot] V1.58: Morgen- und Abendgebet vollstaendig wie im Heft (Astotram, Vaisnava Mantra, Ganesa und Gayatri vor dem Kavacam, Closing Prayers). */
/* [Grok-Bot] V1.53: Gruppen, Details-Taste und Erklaertexte in 6 Sprachen (DE EN FR ES RU HI). */
/* [Grok-Bot] V1.52: Prayer-Liste kompakt (nur Titel); Taste "Details" blendet Quellen ein, wird pro Geraet gemerkt.
   Liste gegliedert wie im Prathana-Heft: Morgengebet, Abendgebet, Weitere. Titel des laufenden Gebets steht ueber den Lyrics. Erklaertexte (Tooltip) fuer alle Tasten. Hinweise "Strophen wie im Heft ..." entfallen. */
(function(){
  var st=document.createElement("style");
  st.textContent="body:not(.show-det) .list .quelle{display:none}body:not(.show-det) .list{gap:4px}body:not(.show-det) .list .item{padding:5px 9px;min-height:30px;font-size:.92rem}@media(min-width:800px){body:not(.show-det) .list{grid-template-columns:repeat(4,1fr)}}.listbar{margin:8px 12px 0;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}.daybar{display:flex;gap:3px;flex-wrap:wrap}.daybar button{min-width:30px;padding:3px 6px}.daybar button.today{border-color:var(--gold)}.daybar button.on{background:var(--gold);color:#000}.list .item.miss{opacity:.45;cursor:default;font-style:italic}.list .grp{grid-column:1/-1;color:var(--gold);font-size:.8rem;letter-spacing:.06em;text-transform:uppercase;margin:6px 2px 0}.list .grp:first-child{margin-top:0}#lyrTitle{margin:0 12px -4px;color:var(--gold);font-family:'Gentium Book Plus',Georgia,serif;font-size:1.15rem}#lyrTitle small{color:var(--muted);font-family:'Source Sans 3',sans-serif;font-size:.75rem;margin-left:.6em;letter-spacing:.04em}#lyrTitle:empty{display:none}.listbar button{padding:3px 9px;min-height:26px;font-size:.8rem;border-radius:6px}";
  document.head.appendChild(st);
  var on=false; try{ on=localStorage.getItem("bpp-det")==="1"; }catch(e){}
  document.body.classList.toggle("show-det", on);
  var list=document.getElementById("list"); if(!list) return;
  var bar=document.createElement("div"); bar.className="listbar";
  var b=document.createElement("button"); b.type="button"; b.id="btnDet";
  var LL=["de","en","fr","es","ru","hi"];
  function li(){ var k=(typeof lang==="undefined")?0:LL.indexOf(lang); return k<0?1:k; }
  function tr(a){ return a[li()]||a[1]; }
  var DET=[["Details","Details","Détails","Detalles","Подробно","विवरण"],["Details aus","Hide details","Masquer détails","Ocultar detalles","Скрыть","विवरण छिपाएँ"]];
  function lab(){ b.textContent=tr(on?DET[1]:DET[0]); b.classList.toggle("on", on); }
  b.onclick=function(){ on=!on; document.body.classList.toggle("show-det", on); try{ localStorage.setItem("bpp-det", on?"1":"0"); }catch(e){} lab(); };
  bar.appendChild(b); list.parentNode.insertBefore(bar, list); lab();
  /* [Grok-Bot] V1.60: Ablauf je Wochentag wie in der Wochenuebersicht des Prathana-Hefts (Version 10). Heute ist vorgewaehlt, andere Tage per Taste. Was noch nicht im Player ist, steht grau in der Liste. */
  var NM=["Morgengebet","Morning prayers","Prière du matin","Oración de la mañana","Утренняя молитва","प्रातः प्रार्थना"], NE=["Abendgebet","Evening prayers","Prière du soir","Oración de la tarde","Вечерняя молитва","सायं प्रार्थना"];
  var DAYS=[["Montag","Monday","Lundi","Lunes","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0938\u094b\u092e\u0935\u093e\u0930"],["Dienstag","Tuesday","Mardi","Martes","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u092e\u0902\u0917\u0932\u0935\u093e\u0930"],["Mittwoch","Wednesday","Mercredi","Mi\u00e9rcoles","\u0421\u0440\u0435\u0434\u0430","\u092c\u0941\u0927\u0935\u093e\u0930"],["Donnerstag","Thursday","Jeudi","Jueves","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u0917\u0941\u0930\u0941\u0935\u093e\u0930"],["Freitag","Friday","Vendredi","Viernes","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930"],["Samstag","Saturday","Samedi","S\u00e1bado","\u0421\u0443\u0431\u0431\u043e\u0442\u0430","\u0936\u0928\u093f\u0935\u093e\u0930"],["Sonntag","Sunday","Dimanche","Domingo","\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u0930\u0935\u093f\u0935\u093e\u0930"]];
  var MISS={ "guru-bhajan":"Guru Bhajan", "vedic-fr":"Vedic chanting: \u015ar\u012b S\u016bktam, Bh\u016b S\u016bktam, N\u012bl\u0101 S\u016bktam", "vedic-sa":"Vedic chanting: Puru\u1e63a S\u016bktam, Vi\u1e63\u1e47u Sahasran\u0101ma, N\u0101r\u0101ya\u1e47a S\u016bktam", "durga":"\u015ar\u012b Durg\u0101 C\u0101l\u012bs\u0101", "vchalisa":"Sri Vishwananda Chalisa", "gita":"Bhagavad G\u012bt\u0101", "ghalin":"Ghalin Lot\u0101nga\u1e47", "saprem":"\u0100rat\u012b Saprem, Jai Jai Vitthala Parabrahma", "panduranga":"P\u0101\u1e47\u1e0dura\u1e45ga A\u1e63\u1e6dakam" };
  var NOTYET=["noch nicht im Player","not in the player yet","pas encore dans le lecteur","a\u00fan no est\u00e1 en el reproductor","\u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0432 \u043f\u043b\u0435\u0435\u0440\u0435","\u0905\u092d\u0940 \u092a\u094d\u0932\u0947\u092f\u0930 \u092e\u0947\u0902 \u0928\u0939\u0940\u0902"];
  var ALL=["Alle","All","Tous","Todos","\u0412\u0441\u0435","\u0938\u092d\u0940"];
  function plan(d){
    if(d<0) return [ { n:ALL, ids:PRAYERS.map(function(p){ return p.id; }), all:true } ];
    var m=["guru-stotram","~guru-bhajan","ashtotram","vaishnava-mantra","guruji-gayatri","gayatri","ganesha-mantra","suprabhatam","govinda"];
    if(d<=3) m=m.concat(["narasimha","ramanuja","vishnu-arati","closing-morning"]);
    else if(d===4) m=m.concat(["~vedic-fr","narasimha","ramanuja","lakshmi-arati","closing-morning"]);
    else if(d===5) m=m.concat(["~vedic-sa","narasimha","ramanuja","vishnu-arati","closing-morning"]);
    else m=m.concat(["kavacham","narasimha","hanuman","ramanuja","vishnu-arati","closing-arati"]);
    var e;
    if(d===6) e=["~ghalin","~saprem","closing-arati","~panduranga","~gita"];
    else { e=["guru-stotram-abend","ashtotram","ganesha-mantra","gayatri","kavacham","narasimha","hanuman"]; if(d===1) e.push("~durga"); if(d===3) e.push("~vchalisa"); e=e.concat(["bhajare","closing-evening","~gita","mukunda","~ghalin","~saprem","closing-arati","~panduranga"]); }
    return [ { n:NM, ids:m }, { n:NE, ids:e, late:d===6 } ];
  }
  var day=(new Date().getDay()+6)%7, GROUPS=plan(day);
  var dbar=document.createElement("div"); dbar.className="daybar";
  DAYS.forEach(function(D,k){ var x=document.createElement("button"); x.type="button"; x.setAttribute("data-d",k); x.onclick=function(){ day=k; GROUPS=plan(day); if(typeof window.paintList==="function") window.paintList(); else regroup(); }; dbar.appendChild(x); });
  (function(){ var x=document.createElement("button"); x.type="button"; x.setAttribute("data-d","-1"); x.onclick=function(){ day=-1; GROUPS=plan(day); if(typeof window.paintList==="function") window.paintList(); else regroup(); }; dbar.appendChild(x); })();
  bar.insertBefore(dbar, b);
  function dayLab(){ var today=(new Date().getDay()+6)%7; dbar.querySelectorAll("button").forEach(function(x){ var k=+x.getAttribute("data-d"); x.textContent=k<0?tr(ALL):tr(DAYS[k]).slice(0,2); x.title=k<0?tr(ALL):tr(DAYS[k]); x.classList.toggle("on", k===day); x.classList.toggle("today", k===today); }); }
  function regroup(){
    var btns=Array.prototype.slice.call(list.querySelectorAll("button.item"));
    if(btns.length!==PRAYERS.length) return;
    var used={}, frag=document.createDocumentFragment();
    function head(t){ var h=document.createElement("div"); h.className="grp"; h.textContent=t; frag.appendChild(h); }
    function put(idx){
      var b0=btns[idx], node=b0;
      if(used[idx]){ node=b0.cloneNode(true); }
      node.onclick=function(){ play(idx, true); };
      used[idx]=true; frag.appendChild(node);
    }
    GROUPS.forEach(function(G){
      head(G.all?tr(G.n):tr(G.n)+" \u00b7 "+tr(DAYS[day])+(G.late?" \u00b7 21:00":""));
      G.ids.forEach(function(id){
        if(id.charAt(0)==="~"){ var mx=document.createElement("div"); mx.className="item miss"; mx.textContent=MISS[id.slice(1)]||id.slice(1); mx.title=tr(NOTYET); frag.appendChild(mx); return; }
        var idx=PRAYERS.findIndex(function(p){ return p.id===id; }); if(idx>=0) put(idx); });
    });
    var rest=[]; PRAYERS.forEach(function(p, idx){ if(!used[idx]) rest.push(idx); });
    if(rest.length){ head(tr(["Weitere","More","Autres","Otros","Другие","अन्य"])); rest.forEach(put); }
    list.innerHTML=""; list.appendChild(frag);
    dayLab(); title();
  }
  var tt=document.createElement("div"); tt.id="lyrTitle";
  var stg=document.getElementById("stage"); if(stg) stg.parentNode.insertBefore(tt, stg);
  function title(){
    if(typeof i==="undefined" || i<0 || !PRAYERS[i]){ tt.textContent=""; return; }
    var P=PRAYERS[i], grp="";
    GROUPS.forEach(function(G){ if(!grp && !G.all && G.ids.indexOf(P.id)>=0) grp=tr(G.n); });
    tt.innerHTML="";
    tt.appendChild(document.createTextNode(P.titel));
    if(grp){ var sm=document.createElement("small"); sm.textContent=grp; tt.appendChild(sm); }
  }
  var TIPS={
    btnPlay:["Abspielen / Pause (Leertaste)","Play / pause (Space)","Lecture / pause (barre d'espace)","Reproducir / pausa (barra espaciadora)","Воспроизвести / пауза (пробел)","चलाएँ / रोकें (स्पेस)"],
    btnPrev:["Eine Strophe zurück (Taste V)","One stanza back (key V)","Strophe précédente (touche V)","Estrofa anterior (tecla V)","Предыдущая строфа (клавиша V)","पिछला श्लोक (कुंजी V)"],
    btnNext:["Nächste Strophe (Taste N). Bei laufendem Ton: hier beginnt die Strophe, wird gemerkt","Next stanza (key N). While playing: the stanza starts here, remembered","Strophe suivante (touche N). Pendant la lecture : la strophe commence ici, c'est mémorisé","Estrofa siguiente (tecla N). Durante la reproducción: la estrofa empieza aquí, se recuerda","Следующая строфа (клавиша N). Во время звучания: строфа начинается здесь, запоминается","अगला श्लोक (कुंजी N)। चलते समय: श्लोक यहाँ से शुरू होता है, याद रखा जाता है"],
    btnAuto:["Automatisch mitscrollen, die Lyrics folgen der Aufnahme","Scroll automatically with the recording","Défilement automatique, le texte suit l'enregistrement","Desplazamiento automático, el texto sigue la grabación","Автопрокрутка, текст следует за записью","अपने आप स्क्रॉल, पाठ रिकॉर्डिंग के साथ चलता है"],
    btnScDown:["Autoscroll langsamer","Auto scroll slower","Défilement plus lent","Desplazamiento más lento","Прокрутка медленнее","स्क्रॉल धीमा"],
    btnScUp:["Autoscroll schneller","Auto scroll faster","Défilement plus rapide","Desplazamiento más rápido","Прокрутка быстрее","स्क्रॉल तेज़"],
    btnAna:["Strophenanfänge aus der Aufnahme ermitteln, danach mit N nachkorrigieren","Find stanza starts in the recording, then correct with N","Détecter les débuts de strophe dans l'enregistrement, puis corriger avec N","Detectar el inicio de cada estrofa en la grabación y corregir con N","Найти начала строф в записи, затем поправить клавишей N","रिकॉर्डिंग में श्लोकों की शुरुआत खोजें, फिर N से सुधारें"],
    btnDe:["Übersetzung unter den Versen ein / aus","Show / hide translation below the verses","Afficher / masquer la traduction sous les vers","Mostrar / ocultar la traducción bajo los versos","Показать / скрыть перевод под стихами","श्लोकों के नीचे अनुवाद दिखाएँ / छिपाएँ"],
    btnCh:["Akkorde über den Versen ein / aus","Show / hide chords above the verses","Afficher / masquer les accords au-dessus des vers","Mostrar / ocultar los acordes sobre los versos","Показать / скрыть аккорды над стихами","श्लोकों के ऊपर कॉर्ड दिखाएँ / छिपाएँ"],
    btnXpDown:["Akkorde einen Halbton tiefer","Chords one semitone down","Accords un demi-ton plus bas","Acordes un semitono más bajo","Аккорды на полтона ниже","कॉर्ड आधा सुर नीचे"],
    btnXpUp:["Akkorde einen Halbton höher","Chords one semitone up","Accords un demi-ton plus haut","Acordes un semitono más alto","Аккорды на полтона выше","कॉर्ड आधा सुर ऊपर"],
    btnXpZero:["Originaltonart wie im Heft","Original key as in the booklet","Tonalité d'origine comme dans le livret","Tonalidad original como en el cuadernillo","Исходная тональность, как в брошюре","पुस्तिका जैसा मूल सुर"],
    btnLangDe:["Bedienung und Übersetzung auf Deutsch","Controls and translation in German","Interface et traduction en allemand","Controles y traducción en alemán","Интерфейс и перевод на немецком","नियंत्रण और अनुवाद जर्मन में"],
    btnLangEn:["Bedienung und Übersetzung auf Englisch","Controls and translation in English","Interface et traduction en anglais","Controles y traducción en inglés","Интерфейс и перевод на английском","नियंत्रण और अनुवाद अंग्रेज़ी में"],
    btnLangFr:["Bedienung und Übersetzung auf Französisch","Controls and translation in French","Interface et traduction en français","Controles y traducción en francés","Интерфейс и перевод на французском","नियंत्रण और अनुवाद फ़्रेंच में"],
    btnLangEs:["Bedienung und Übersetzung auf Spanisch","Controls and translation in Spanish","Interface et traduction en espagnol","Controles y traducción en español","Интерфейс и перевод на испанском","नियंत्रण और अनुवाद स्पेनिश में"],
    btnLangRu:["Bedienung und Übersetzung auf Russisch","Controls and translation in Russian","Interface et traduction en russe","Controles y traducción en ruso","Интерфейс и перевод на русском","नियंत्रण और अनुवाद रूसी में"],
    btnLangHi:["Bedienung und Übersetzung auf Hindi","Controls and translation in Hindi","Interface et traduction en hindi","Controles y traducción en hindi","Интерфейс и перевод на хинди","नियंत्रण और अनुवाद हिन्दी में"],
    btnDet:["Quelle und Fortsetzungsstelle in der Liste ein / aus","Show / hide source and resume point in the list","Afficher / masquer la source et le point de reprise dans la liste","Mostrar / ocultar la fuente y el punto de reanudación en la lista","Показать / скрыть источник и место продолжения в списке","सूची में स्रोत और जारी रखने का स्थान दिखाएँ / छिपाएँ"]
  };
  function tips(){
    Object.keys(TIPS).forEach(function(id){ var e=document.getElementById(id); if(e) e.title=tr(TIPS[id]); });
  }
  window.bppTips=tips;
  var NOHINT=/^(Jede Strophe|Strophen|Zeilen wie im|Stanzas as in|Each verse in)/;
  PRAYERS.forEach(function(P){ ["hinweis","hinweisDe","hinweisEn"].forEach(function(k){ if(NOHINT.test(String(P[k]||""))) P[k]=""; }); });
  document.addEventListener("DOMContentLoaded", function(){
    var pl=window.paintList; if(typeof pl==="function"){ window.paintList=function(){ pl.apply(this, arguments); regroup(); }; }
    regroup();
    var orig=window.applyUI; if(typeof orig==="function"){ window.applyUI=function(){ orig.apply(this, arguments); lab(); tips(); }; } lab(); tips(); });
})();
/* [Grok-Bot] V1.61: Versionsanzeige. */
document.addEventListener("DOMContentLoaded", function(){ setTimeout(function(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V1.61"; document.title="Bhakti Prayers Player V1.61"; }, 0); });
/* [Grok-Bot] V1.61: Sprachauswahl als kleines Dropdown statt sechs Tasten. Die alten Tasten bleiben unsichtbar im Seitenaufbau, damit vorhandene Funktionen weiterlaufen. */
document.addEventListener("DOMContentLoaded", function(){
  var L=[["de","DE","Deutsch"],["en","EN","English"],["fr","FR","Fran\u00e7ais"],["es","ES","Espa\u00f1ol"],["ru","RU","\u0420\u0443\u0441\u0441\u043a\u0438\u0439"],["hi","HI","\u0939\u093f\u0928\u094d\u0926\u0940"]];
  var first=document.getElementById("btnLangDe"); if(!first || typeof setLang!=="function") return;
  var st=document.createElement("style"); st.textContent="#langSel{font-size:.75rem;padding:1px 2px;height:24px;border-radius:6px;background:transparent;color:inherit;border:1px solid var(--muted,#888);cursor:pointer}#langSel option{color:#000}.lang-hidden{display:none!important}";
  document.head.appendChild(st);
  var s=document.createElement("select"); s.id="langSel";
  L.forEach(function(x){ var o=document.createElement("option"); o.value=x[0]; o.textContent=x[1]; o.title=x[2]; s.appendChild(o); });
  first.parentNode.insertBefore(s, first);
  L.forEach(function(x){ var e=document.getElementById("btnLang"+x[1].charAt(0)+x[1].charAt(1).toLowerCase()); if(e) e.classList.add("lang-hidden"); });
  function sync(){ try{ if(typeof lang!=="undefined") s.value=lang; }catch(e){} var k=L.findIndex(function(x){ return x[0]===s.value; }); s.title=k>=0?L[k][2]:""; }
  s.onchange=function(){ setLang(s.value); sync(); };
  var orig=window.applyUI; if(typeof orig==="function"){ window.applyUI=function(){ orig.apply(this, arguments); sync(); }; }
  sync();
});
