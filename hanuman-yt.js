/* [Grok-Bot] V1.55: Hanuman Chalisa spielt das YouTube-Video der Prabhus (fBw-BSoZGgM), die MP3 bleibt als Ersatz. Mit Strophenanfaengen fuer den Autoscroll. */
(function(){
  var h = PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!h) return;
  h.youtube = "fBw-BSoZGgM";
  h.preferFile = false;
  /* Strophenanfaenge im Video (Sekunden je Strophe), per Spracherkennung der Tonspur ermittelt */
  h.marksYt = [0, 24.7, 46.5, 78.8, 99.5, 119.9, 138.8, 158.9, 178.3, 197.8, 216.9, 237.1, 257.1, 275.3, 293.3, 310.8, 327.9, 344.8, 360.9, 376.9, 392.5, 407.5, 421.9, 436.5, 454.5, 489.5, 509.5];
  /* [Grok-Bot] V1.57: Dohā und Kīrtan ohne Ziffern im Namen, damit vor und nach den 40 Versen keine falschen Nummern 1 und 2 erscheinen */
  var NR = { "Doh\u0101 1":"Doh\u0101\u00b7a", "Doh\u0101 2":"Doh\u0101\u00b7b", "K\u012brtan 1":"K\u012brtan\u00b7a", "K\u012brtan 2":"K\u012brtan\u00b7b" };
  h.zeilen.forEach(function(z){ if(NR[z.nr]) z.nr = NR[z.nr]; });
  h.quelle = "Prathana with chords \u00b7 Sri Vitthal Dham \u00b7 S. 21\u201323 \u00b7 Ton: YouTube (Prabhus), MP3 als Ersatz";
})();
/* [Grok-Bot] V1.57: YouTube meldet seinen Abspielstatus nicht immer. Darum gilt das Video als laufend, sobald seine Zeit weiterlaeuft, und als angehalten, wenn sie stehen bleibt. Sonst startete der Autoscroll nicht. */
(function(){
  var lastT=null, still=0, moving=false;
  setInterval(function(){
    if(typeof ytOn==="undefined" || !ytOn) { lastT=null; still=0; moving=false; return; }
    if(typeof ytTime!=="number") return;
    if(lastT!==null && ytTime!==lastT){
      still=0; moving=true;
      if(!ytPlaying){ ytPlaying=true; try{ markPlayOrigin(); }catch(e){} try{ syncPlayBtn(); }catch(e){} }
    } else if(lastT!==null){
      still++;
      if(still>=2) moving=false;
      if(still>=3 && ytPlaying){ ytPlaying=false; try{ syncPlayBtn(); }catch(e){} }
    }
    lastT=ytTime;
  }, 700);
  /* [Grok-Bot] V1.59: Play/Pause beim Video richtet sich danach, ob das Video wirklich laeuft. Vorher galt ein frisch geladenes, noch stehendes Video als laufend, und der erste Druck auf Play hielt es an statt es zu starten. */
  window.addEventListener("message", function(e){
    var d=e.data; if(typeof d==="string"){ try{ d=JSON.parse(d); }catch(err){ return; } }
    if(!d || typeof ytOn==="undefined" || !ytOn) return;
    if((d.event==="initialDelivery" || d.event==="onReady") && !moving && ytPlaying){ ytPlaying=false; try{ syncPlayBtn(); }catch(err){} }
  });
  var tp=window.togglePlay;
  window.togglePlay=function(){
    if(typeof i!=="undefined" && i>=0 && ytOn){
      if(moving){ ytCmd("pauseVideo"); ytPlaying=false; moving=false; still=0; }
      else { ytCmd("playVideo"); ytPlaying=true; still=0; try{ markPlayOrigin(); }catch(err){} }
      try{ syncPlayBtn(); }catch(err){} return;
    }
    return tp.apply(this, arguments);
  };
  /* Alte, von Hand gesetzte Strophenzeiten der Hanuman Chalisa (YouTube) einmalig verwerfen, die eingemessenen Zeiten gelten */
  try{
    if(localStorage.getItem("bpp-hn-reset1")!=="1"){
      var s=JSON.parse(localStorage.getItem("bpp-marks")||"{}");
      delete s["hanuman|yt"];
      localStorage.setItem("bpp-marks", JSON.stringify(s));
      localStorage.setItem("bpp-hn-reset1","1");
    }
  }catch(e){}
})();
/* [Grok-Bot] V1.58: Morgen- und Abendgebet vollstaendig wie im Prathana-Heft: Astotram (S. 6-7 / 18-19), Vaisnava Mantra (S. 8), Closing Prayers morgens (S. 15), abends (S. 25) und nach der Arati (S. 27). Die alten Final Prayers gehen in den Closing Prayers auf. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var Q="Prathana with chords \u00b7 Sri Vitthal Dham";
  function add(p){ if(!PRAYERS.some(function(x){ return x.id===p.id; })) PRAYERS.push(p); }
  function L(nr, rows){ return rows.map(function(r){ return { nr:nr, ch:r[0]||"", sa:r[1], ue:r[2]||"", en:r[3]||r[2]||"" }; }); }
  var NM="mahāvatāra śiṣyāya|viṣamāya|devakārya samudyatāya|sūkṣma tanave|cinmayāya|guru mūrtaye|sundarāya|sulocanāya|sumukhāya|cāru hāsāya|keśavāya|padmāmbhujāya|manda gamanāya|cāruṁbara dhārine|rāmāya|mandira sthāpakāya|ṣirḍi bābārcakāya|gāyatrī yajvane|arpaṇa svīkārakāya|viṣṇu pūjakāya|namo nārāyaṇāyeti mantropāsakāya|svaramayāya|madhura kaṇṭhāya|kṛṣṇa saṁkīrtana lolupāya|stotra priyāya|mita bhāṣine|vāgmine|citrakalā viśāradāya|vrata dhārāya|sādhave|jagat pānthāya|sarva loka hitāya|bhakta priyāya|suhṛdāya|anukūlāya|neyāya|sudarśanāya|bhakta vatsalāya|prema mūrtaye|śubhekṣaṇāya|prīti vardhanāya|svasti dāyakāya|tārakāya|anugrahāya|vardhanāya|arcitāya|arthāya|siddhi pradāya|janārdanāya|manoharāya|mahākṣāya|siddheśvarāya|bhasma bhūṣitāya|ātma liṅgāya|liṅgārcana protsāhakāya|siddhi sādhanāya|mādhavāya|oṁkāropāsakāya|sūkṣmāya|viśokāya|sāttvikāya|sama darśine|dakṣāya|acintyāya|nir-ahaṁkārāya|nir-mohāya|avyagrāya|jita krodhāya|vinaya śīlāya|svavaśāya|kuśalāya|kṣamāya|satya dharmāya|nir-vikalpāya|viraktāya|atindrāya|satya sandhāya|pavitrāya|madhura svabhāvāya|surānandāya|nandanāya|prasannātmane|bhakta nidhaye|sākṣaye|samātmaye|sadā yogine|haraye|sutapāya|saumyāya|guhyāya|vimukta-atmāya|gabhīrāya|guptāya|ātma rāmāya|śrī nivāsāya|devāya|dyutidharāya|dhanyāya|gurave|durati kramāya|gahanāya|bhagavate|hari śaraṇa mārga darśakāya|kūṭastha jāgartakāya|abhiprāyāya|sarvamata samatyāya|kṣamaikatā bhāva vardhakāya|premāvatāra śrī vishwananda svāmine".split("|"), ash=[], CUT=[1,10,19,28,37,46,54,63,72,81,90,100,109];
  for(var g=0; g<CUT.length-1; g++){ for(var n=CUT[g]; n<CUT[g+1]; n++){ ash.push({ nr:"A\u1e63\u1e6d\u00b7"+String.fromCharCode(97+g), ch:(n===1?"C":n===54?"D":n===100?"E":""), sa:(n<10?"0":"")+n+" o\u1e41 "+NM[n-1]+" nama\u1e25", ue:"", en:"" }); } }
  var vai=[["ato dev\u0101 avantu no yato vi\u1e63\u1e47ur vicakrame","p\u1e5bthivy\u0101\u1e25 sapta dh\u0101mabhi\u1e25"],["ida\u1e41 vi\u1e63\u1e47ur vicakrame tredh\u0101 nidadhe padam","sam\u016b\u1e0dham asya p\u0101(g)m\u0310 sure"],["tr\u012b\u1e47i pad\u0101 vicakrame vi\u1e63\u1e47ur gop\u0101 ad\u0101bhya\u1e25","ato dharm\u0101\u1e47i dh\u0101rayan"],["vi\u1e63\u1e47o\u1e25 karm\u0101\u1e47i pa\u015byata yato vrat\u0101ni paspa\u015be","indrasya yujya\u1e25 sakh\u0101"],["tad vi\u1e63\u1e47o\u1e25 parama\u1e41 pada(g)m\u0310 sad\u0101 pa\u015byanti s\u016braya\u1e25","div\u012bva cak\u1e63ur \u0101tatam"],["tad vipr\u0101so vipanyavo j\u0101g\u1e5bv\u0101(g)m\u0310 sa\u1e25 samindhate","vi\u1e63\u1e47or yat parama\u1e41 padam"]];
  var vz=[]; vai.forEach(function(v,k){ vz=vz.concat(L("V\u00b7"+String.fromCharCode(97+k), [[k?"":"C", v[0]],["", v[1]]])); });
  var TVAM=L("Tvam",[["C   F   G","tvam eva m\u0101t\u0101 ca pit\u0101 tvam eva","du allein bist Mutter und Vater","you alone are mother and father"],["Am   G   C","tvam eva bandhu\u015b ca sakh\u0101 tvam eva","du allein Freund und Gef\u00e4hrte","you alone are kin and friend"],["C   F   G","tvam eva vidy\u0101 dravi\u1e47a\u1e41 tvam eva","du allein Wissen und Reichtum","you alone are knowledge and wealth"],["Am   G   C","tvam eva sarva\u1e41 mama deva deva","du allein bist alles, mein Gott der G\u00f6tter","you alone are everything, my God of gods"]]);
  var SH=["C","o\u1e41 \u015b\u0101nti\u1e25 \u015b\u0101nti\u1e25 \u015b\u0101nti\u1e25","Frieden, Frieden, Frieden","peace, peace, peace"], GU=["Bbm   C","\u015br\u012b gurubhyo nama\u1e25  \u00b7  hari\u1e25 o\u1e41","Verehrung den Gurus \u00b7 Hari Om","salutations to the Gurus \u00b7 Hari Om"];
  var ASATO=L("Asato",[["C   Am","asato m\u0101 sad gamaya","vom Unwirklichen f\u00fchre mich zum Wirklichen","lead me from the unreal to the real"],["G   C","tamaso m\u0101 jyotir gamaya","vom Dunkel f\u00fchre mich zum Licht","from darkness lead me to light"],["G   C","m\u1e5btyor m\u0101 (a)'m\u1e5bt\u0101m gamaya","vom Tod f\u00fchre mich zur Unsterblichkeit","from death lead me to immortality"],SH,["","lok\u0101\u1e25 samast\u0101\u1e25 sukhino bhavantu (3)","m\u00f6gen alle Welten gl\u00fccklich sein","may all the worlds be happy"],["",SH[1],SH[2],SH[3]],GU]);
  var GLOR=L("Glor",[["C","prem se bolo lak\u1e63m\u012b n\u0101r\u0101ya\u1e47a bhagav\u0101n k\u012b... jai!","Sieg Lak\u1e63m\u012b N\u0101r\u0101ya\u1e47a","victory to Lakshmi Narayana"],["","prem se bolo \u015br\u012b r\u0101dh\u0101 k\u1e5b\u1e63\u1e47a kanhaiya-l\u0101la k\u012b... jai!","Sieg R\u0101dh\u0101 K\u1e5b\u1e63\u1e47a","victory to Radha Krishna"],["","prem se bolo mah\u0101vat\u0101ra kriy\u0101 b\u0101b\u0101ji k\u012b... jai!","Sieg Mah\u0101vat\u0101r B\u0101b\u0101j\u012b","victory to Mahavatar Babaji"],["","prem se bolo \u015br\u012b r\u0101m\u0101nuja \u0101c\u0101ry\u0101 k\u012b... jai!","Sieg R\u0101m\u0101nuj\u0101c\u0101rya","victory to Ramanujacharya"],["","prem se bolo prem\u0101vat\u0101ra sat-gurudeva,","dem Avatar der Liebe, dem Satguru,","to the avatar of love, the Satguru,"],["","\u015br\u012b sw\u0101m\u012b vishwananda mah\u0101prabhu k\u012b... jai!","\u015ar\u012b Sw\u0101m\u012b Vishwananda Mah\u0101prabhu, Sieg","Sri Swami Vishwananda Mahaprabhu, victory"]]);
  var SUD=L("Sud",[["C","o\u1e41 kl\u012b\u1e41 k\u1e5b\u1e63\u1e47\u0101ya govind\u0101ya gop\u012bjana-vallabh\u0101ya /","Mah\u0101 Sudar\u015bana M\u016bla Mantra","Maha Sudarshana Mula Mantra"],["","par\u0101ya parama-puru\u1e63\u0101ya /"],["","parakarma mantra yantra tantra"],["","au\u1e63adh\u0101stra \u015ba\u1e63tr\u0101\u1e47i /"],["","sa\u1e41hara sa\u1e41hara m\u1e5btyor moc\u0101ya moc\u0101ya /"],["Bbm   C","o\u1e41 namo bhagavate mah\u0101 sudar\u015ban\u0101ya d\u012bpte"],["","jv\u0101la par\u012bt\u0101ya sarvadik-k\u1e63obha\u1e47a hu\u1e41 pha\u1e6d /"],["Bbm   C","parasmai parabrahma\u1e47e para\u1e41joti\u1e63e / sv\u0101h\u0101"]]);
  var PURN=L("Purn",[["C   Bbm","o\u1e41 p\u016br\u1e47am ada\u1e25 p\u016br\u1e47am ida\u1e41 p\u016br\u1e47\u0101t","jenes ist vollkommen, dieses ist vollkommen","that is whole, this is whole"],["C","p\u016br\u1e47am udacyate","aus dem Vollkommenen geht Vollkommenes hervor","from the whole the whole arises"],["","p\u016br\u1e47asya p\u016br\u1e47am\u0101d\u0101ya","nimmt man Vollkommenes vom Vollkommenen","taking the whole from the whole"],["","p\u016br\u1e47am ev\u0101va\u015bi\u1e63yate","bleibt Vollkommenes","the whole remains"]]);
  var SHG=L("Shanti",[SH,GU]);
  var JAI=L("Jai",[["","jai jai \u015br\u012b r\u0101dhe"],["","jai jai \u015br\u012b r\u0101dhe"],["G   C","jai jai \u015br\u012b r\u0101dhe... \u015by\u0101m!"],["","venkatarama\u1e47a govinda... govinda!"],["","gopik\u0101 j\u012bvana smara\u1e47am govinda... govinda!"],["","bhakta vatsala govinda... govinda!"],["","govinda, govinda... govinda!"],["C","pundalika varde... hari vitthal!"],["","eknath namdev... tukaram!"],["","pandarinath maharaja ki... jai!"],["","samasta bhakta mandali ki... jai!"],["C   Bbm   C","alvar emperumanar thiruvadigale... sharanam!"]]);
  function P(id, titel, autor, s, z){ add({ id:id, titel:titel, autor:autor+" \u00b7 Sri Vitthal Dham", quelle:Q+" \u00b7 S. "+s, hinweis:"Heft S. "+s+".", hinweisEn:"Booklet p. "+s+".", zeilen:z }); }
  P("ashtotram","Paramaha\u1e41sa \u015ar\u012b Sw\u0101m\u012b Vishwananda A\u1e63\u1e6dotram","Morgen- und Abendgebet","6\u20137 und 18\u201319",ash);
  P("vaishnava-mantra","Vai\u1e63\u1e47ava Mantra","Morgengebet","8",vz);
  P("closing-morning","Closing Prayers (morning)","Morgengebet","15",[].concat(TVAM,ASATO,GLOR,SUD,SHG,JAI));
  P("closing-evening","Closing Prayers (evening)","Abendgebet","25",[].concat(SHG,GLOR));
  P("closing-arati","Closing Prayers (\u0101rat\u012b)","Abendgebet","27",[].concat(TVAM,ASATO,GLOR,SUD,PURN,SHG,JAI));
  var k=PRAYERS.findIndex(function(p){ return p.id==="final-prayers"; }); if(k>=0) PRAYERS.splice(k,1);
  var B=PRAYERS.find(function(p){ return p.id==="bhajare"; }); if(B) B.titel="Paramahamsa Sri Swami Vishwananda \u0100rat\u012b (Bhajare)";
  document.addEventListener("DOMContentLoaded", function(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V1.59"; document.title="Bhakti Prayers Player V1.59"; });
})();
/* [Grok-Bot] V1.59: Hovertext jeder Sprachtaste in ihrer eigenen Sprache. Details in der Liste (Quelle, Seite, Fortsetzungsstelle) in der gewaehlten Sprache. */
(function(){
  var LL=["de","en","fr","es","ru","hi"];
  var LT={ btnLangDe:"Bedienung und \u00dcbersetzung auf Deutsch", btnLangEn:"Controls and translation in English", btnLangFr:"Interface et traduction en fran\u00e7ais", btnLangEs:"Controles y traducci\u00f3n en espa\u00f1ol", btnLangRu:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c", btnLangHi:"\u0928\u093f\u092f\u0902\u0924\u094d\u0930\u0923 \u0914\u0930 \u0905\u0928\u0941\u0935\u093e\u0926 \u0939\u093f\u0928\u094d\u0926\u0940 \u092e\u0947\u0902" };
  var W=[
    [/Morgen- und Abendgebet/g,"Morning and evening prayers","Pri\u00e8re du matin et du soir","Oraci\u00f3n de la ma\u00f1ana y de la tarde","\u0423\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0438 \u0432\u0435\u0447\u0435\u0440\u043d\u044f\u044f \u043c\u043e\u043b\u0438\u0442\u0432\u0430","\u092a\u094d\u0930\u093e\u0924\u0903 \u0914\u0930 \u0938\u093e\u092f\u0902 \u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e"],
    [/Morgengebet/g,"Morning prayers","Pri\u00e8re du matin","Oraci\u00f3n de la ma\u00f1ana","\u0423\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043c\u043e\u043b\u0438\u0442\u0432\u0430","\u092a\u094d\u0930\u093e\u0924\u0903 \u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e"],
    [/Abendgebet/g,"Evening prayers","Pri\u00e8re du soir","Oraci\u00f3n de la tarde","\u0412\u0435\u0447\u0435\u0440\u043d\u044f\u044f \u043c\u043e\u043b\u0438\u0442\u0432\u0430","\u0938\u093e\u092f\u0902 \u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e"],
    [/MP3 als Ersatz/g,"MP3 as fallback","MP3 en secours","MP3 de reserva","MP3 \u043a\u0430\u043a \u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442","MP3 \u0935\u093f\u0915\u0932\u094d\u092a \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902"],
    [/Ton:/g,"Audio:","Son :","Audio:","\u0417\u0432\u0443\u043a:","\u0927\u094d\u0935\u0928\u093f:"],
    [/Prathana-Heft S\./g,"Prathana booklet p.","Livret Prathana p.","Cuadernillo Prathana p.","\u0411\u0440\u043e\u0448\u044e\u0440\u0430 Prathana, \u0441.","\u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e \u092a\u0941\u0938\u094d\u0924\u093f\u0915\u093e, \u092a\u0943."],
    [/Chords-Heft/g,"chord booklet","livret d'accords","cuadernillo de acordes","\u0441\u0431\u043e\u0440\u043d\u0438\u043a \u0430\u043a\u043a\u043e\u0440\u0434\u043e\u0432","\u0915\u0949\u0930\u094d\u0921 \u092a\u0941\u0938\u094d\u0924\u093f\u0915\u093e"],
    [/\bHeft\b/g,"booklet","livret","cuadernillo","\u0431\u0440\u043e\u0448\u044e\u0440\u0430","\u092a\u0941\u0938\u094d\u0924\u093f\u0915\u093e"],
    [/Notenblatt/g,"sheet music","partition","partitura","\u043d\u043e\u0442\u044b","\u0938\u094d\u0935\u0930\u0932\u093f\u092a\u093f"],
    [/Seite /g,"page ","page ","p\u00e1gina ","\u0441. ","\u092a\u0943. "],
    [/weiter ab/g,"resume at","reprendre \u00e0","continuar en","\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0441","\u092f\u0939\u093e\u0901 \u0938\u0947 \u091c\u093e\u0930\u0940"],
    [/\bS\. /g,"p. ","p. ","p. ","\u0441. ","\u092a\u0943. "],
    [/ und /g," and "," et "," y "," \u0438 "," \u0914\u0930 "]
  ];
  function li(){ var k=(typeof lang==="undefined")?0:LL.indexOf(lang); return k<0?1:k; }
  function fix(){
    var k=li();
    document.querySelectorAll("#list .quelle").forEach(function(q){
      if(q.getAttribute("data-de")===null) q.setAttribute("data-de", q.textContent);
      var s=q.getAttribute("data-de");
      if(k>0) W.forEach(function(w){ s=s.replace(w[0], w[k]); });
      if(q.textContent!==s) q.textContent=s;
    });
    Object.keys(LT).forEach(function(id){ var e=document.getElementById(id); if(e) e.title=LT[id]; });
  }
  window.bppFixDet=fix;
  document.addEventListener("DOMContentLoaded", function(){ setTimeout(function(){
    ["paintList","applyUI"].forEach(function(n){ var f=window[n]; if(typeof f==="function"){ window[n]=function(){ var r=f.apply(this, arguments); fix(); return r; }; } });
    fix();
  }, 0); });
})();
