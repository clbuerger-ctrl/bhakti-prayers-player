/* [Grok-Bot] V2.20: Guru Stotram - Om ist keine Strophe, Strophenzeiten neu gemessen (Abend und Morgen).
   Messung wie Kavaca V1.96: Gesangsspur per Stimmtrennung (Demucs) freigestellt, Zeilen-Atempausen aus dem Pegel,
   jede Zeile per Spracherkennung (Whisper) dem Text zugeordnet. Wechsel jeweils am Ende der letzten gesungenen Zeile
   (Beginn der Atempause, Pausentabelle), Strophe 1 erst mit "akhanda" - das Om davor ist keine Strophe.
   - Abend (audio/guru-stotram-abend3.mp3, 252 s, das erste Om ist schon herausgeschnitten): Die Aufnahme beginnt noch mit
     zwei weiteren Om (0-8 s, 9-15 s); "akhanda" setzt bei 17,4 s ein. Die bisherigen Marken (v210) zaehlten das Om als
     Strophe und lagen bis zu 17 s zu frueh. 13 Strophen, dann "tvam eva" dreimal (209,9 s und 224,3 s, Schluss langsamer).
   - Morgen (audio/guru-stotram.mp3, 227 s): kein Om, "akhanda" ab 3,8 s; bisher nur geschaetzt, jetzt gemessen.
   - Beide Gebete haben keine YouTube-Quelle, gemessen ist nur die MP3.
   - Liegt noch die alte Abend-MP3 mit Om (ueber 258 s) vor, gelten dieselben Zeiten um 10,7 s verschoben.
   - Alte gespeicherte Strophen-Tipps fuer Guru Stotram werden einmalig geloescht (v209 verwendet ohnehin keine mehr).
   - Ein Om am Anfang der Lyrics (reine "Om"-Zeile vor Strophe 1) wird entfernt, falls eine aeltere Datei es noch liefert.
   Versionsanzeige: window.BPP_SHOW (v209/v210/v215-v218 zeigen diesen Stand, keine Rueckspruenge auf V2.17/V2.18). */
window.BPP_BUILD="2.20"; window.BPP_SHOW="2.20";
(function(){
  if(window.bppV220) return; window.bppV220=1;
  var SEQ={
    "guru-stotram-abend":[[0,0],[31.2,1],[44.3,2],[58.0,3],[71.5,4],[85.2,5],[98.9,6],[112.8,7],[126.7,8],[140.6,9],[154.5,10],[168.5,11],[182.3,12],[196.1,13],[209.9,13],[224.3,13]],
    "guru-stotram":[[0,0],[18.7,1],[33.5,2],[48.2,3],[62.7,4],[77.7,5],[92.4,6],[107.2,7],[121.9,8],[136.6,9],[151.4,10],[166.1,11],[181.0,12],[195.7,13]]
  };
  var PZ={"guru-stotram-abend|file":[2521,0,1,71,87,155,174,205,208,240,243,274,277,309,312,341,344,373,377,406,410,440,443,474,477,507,512,542,546,577,580,610,613,643,647,677,681,712,714,745,749,779,784,814,818,850,852,883,886,917,919,950,954,987,989,1056,1058,1090,1093,1125,1128,1159,1163,1194,1197,1228,1231,1264,1267,1298,1301,1333,1336,1367,1370,1402,1406,1437,1440,1471,1475,1506,1510,1542,1545,1576,1579,1611,1615,1646,1650,1682,1684,1716,1719,1751,1753,1785,1788,1820,1823,1854,1856,1888,1891,1922,1926,1958,1961,1993,1995,2026,2029,2061,2064,2098,2099,2129,2133,2164,2167,2198,2201,2237,2243,2292,2297,2345,2350,2397,2402,2463,2520],
    "guru-stotram|file":[2266,0,38,68,72,88,90,106,111,143,148,181,186,217,222,254,260,276,277,292,296,330,335,366,370,403,408,438,443,477,482,512,516,549,554,571,572,586,591,624,627,648,650,676,677,697,702,734,739,772,777,808,813,845,850,867,868,881,886,918,924,940,942,956,960,992,997,1011,1013,1028,1034,1067,1072,1085,1087,1102,1107,1141,1146,1159,1160,1177,1182,1214,1219,1234,1235,1250,1255,1290,1293,1307,1308,1324,1329,1362,1366,1384,1385,1399,1404,1420,1422,1436,1441,1457,1458,1472,1477,1510,1514,1547,1550,1583,1588,1601,1604,1621,1625,1658,1661,1696,1699,1730,1735,1768,1772,1805,1810,1841,1846,1880,1885,1916,1920,1953,1957,1971,1972,1997,2002,2024,2025,2046,2052,2066,2067,2094,2099,2146,2152,2222,2266]};
  var OLD=10.7;
  function by(id){ return (typeof PRAYERS!=="undefined")?PRAYERS.find(function(p){ return p.id===id; }):null; }
  function marksOf(s){ var m=[]; s.forEach(function(e){ if(m[e[1]]==null) m[e[1]]=e[0]; }); return m; }
  function isOm(z){ return /^\s*(o[mṃṁ]|ॐ)([\s,.!]*(o[mṃṁ]|ॐ))*[\s,.!]*$/i.test(String(z && z.sa || "")); }
  function shiftFor(id){
    if(id!=="guru-stotram-abend") return 0;
    try{ if(typeof i!=="undefined" && i>=0 && PRAYERS[i] && PRAYERS[i].id===id && !(typeof ytOn!=="undefined" && ytOn) &&
      typeof a!=="undefined" && a && isFinite(a.duration) && a.duration>258) return OLD; }catch(e){}
    return 0;
  }
  function apply(){
    Object.keys(SEQ).forEach(function(id){
      var P=by(id); if(!P) return;
      if(P.zeilen && P.zeilen.length && isOm(P.zeilen[0])){ while(P.zeilen.length && isOm(P.zeilen[0])) P.zeilen.shift(); }
      var sh=shiftFor(id), s=SEQ[id].map(function(e){ return [e[0]?Math.round((e[0]+sh)*10)/10:0, e[1]]; });
      var key=JSON.stringify(s);
      if(P._bpp220!==key){ P._bpp220=key; P.seqFile=s; }
      var m=marksOf(P.seqFile);
      if(!P.marksFile || P.marksFile.join()!==m.join()) P.marksFile=m;
      P._bppEstMarks=0; P._bppEstSrc=""; delete P._bppOmSkip;
    });
  }
  window.bppV220Apply=apply;
  if(window.BPP_PAUSES){ Object.keys(PZ).forEach(function(k){ window.BPP_PAUSES[k]=PZ[k]; }); }
  apply();
  try{ if(!localStorage.getItem("bpp-v220-gs")){
    var s=JSON.parse(localStorage.getItem("bpp-marks")||"{}"), ch=0;
    Object.keys(s).forEach(function(k){ if(/^guru-stotram/.test(k)){ delete s[k]; ch=1; } });
    if(ch) localStorage.setItem("bpp-marks", JSON.stringify(s));
    localStorage.setItem("bpp-v220-gs","1");
  } }catch(e){}
  function ver(){
    window.BPP_SHOW="2.20"; window.BPP_BUILD="2.20";
    var v=document.querySelector("h1 .ver"); if(v && v.textContent!=="V2.20") v.textContent="V2.20";
    if(document.title!=="Bhakti Prayers Player V2.20") document.title="Bhakti Prayers Player V2.20";
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ apply(); ver(); }); else ver();
  window.addEventListener("load", function(){ apply(); ver(); });
  setInterval(function(){ apply(); if(window.BPP_BUILD!=="2.20") window.BPP_BUILD="2.20"; }, 500);
})();
