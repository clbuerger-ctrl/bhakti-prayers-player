/* [Grok.com] V1.31 IAST + Heft-Umbruch: eine Strophe = vier Zeilen wie im Prathana-Heft */
(function(){
  var m = PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(!m) return;
  var iast = [
    "ghu\u1e63yate yasya nagare ra\u1e45ga-y\u0101tr\u0101 dine-dine | tam aha\u1e43 \u015biras\u0101 vande r\u0101j\u0101na\u1e43 kula\u015bekharam ||",
    "\u015br\u012b-vallabheti varadeti day\u0101pareti bhakta-priyeti bhava-lu\u1e47\u1e6dhana-kovideti | n\u0101theti n\u0101ga-\u015bayaneti jagan-niv\u0101seti \u0101l\u0101pana\u1e43 prati-dina\u1e43 kuru me mukunda ||",
    "jayatu jayatu devo devak\u012b-nandano \u2019ya\u1e43 jayatu jayatu k\u1e5b\u1e63\u1e47o v\u1e5b\u1e63\u1e47i-va\u1e43\u015ba-prad\u012bpa\u1e25 | jayatu jayatu megha-\u015by\u0101mala\u1e25 komal\u0101\u1e45go jayatu jayatu p\u1e5bthv\u012b-bh\u0101ra-n\u0101\u015bo mukunda\u1e25 ||",
    "mukunda m\u016brdhn\u0101 pra\u1e47ipatya y\u0101ce bhavantam ek\u0101ntam iyantam artham | avism\u1e5btis tvac-cara\u1e47\u0101ravinde bhave bhave me \u2019stu bhavat-pras\u0101d\u0101t ||",
    "n\u0101ha\u1e43 vande tava cara\u1e47ayor dvandvam advandva-heto\u1e25 kumbh\u012bp\u0101ka\u1e43 gurum api hare naraka\u1e43 n\u0101panetum | ramy\u0101-r\u0101m\u0101-m\u1e5bdu-tanu-lat\u0101-nandane n\u0101pi rantu\u1e43 bhave bhave h\u1e5bdaya-bhavane bh\u0101vayeya\u1e43 bhavantam ||",
    "n\u0101sth\u0101 dharme na vasu-nicaye naiva k\u0101mopabhoge yad yad bh\u0101vya\u1e43 tad bhavatu bhagavan p\u016brva-karm\u0101nur\u016bpam | etat pr\u0101rthya\u1e43 mama bahu mata\u1e43 janma-janm\u0101ntare \u2019pi tvat-pad\u0101mbhoruha-yuga-gat\u0101 ni\u015bcal\u0101 bhaktir astu ||",
    "divi v\u0101 bhuvi v\u0101 mam\u0101stu v\u0101so narake v\u0101 narak\u0101ntaka prak\u0101mam | avadh\u012brita-\u015b\u0101rad\u0101ravindau cara\u1e47au te mara\u1e47e \u2019pi cintay\u0101mi ||",
    "k\u1e5b\u1e63\u1e47a tvad\u012bya-pada-pa\u1e45kaja-pa\u00f1jar\u0101ntam adyaiva me vi\u015batu m\u0101nasa-r\u0101ja-ha\u1e43sa\u1e25 | pr\u0101\u1e47a-pray\u0101\u1e47a-samaye kapha-v\u0101ta-pittai\u1e25 ka\u1e47\u1e6dh\u0101varodhana-vidhau smara\u1e47a\u1e43 kutas te ||",
    "cintay\u0101mi harim eva santata\u1e43 manda-manda-hasit\u0101nan\u0101mbujam | nanda-gopa-tanaya\u1e43 par\u0101t para\u1e43 n\u0101rad\u0101di-muni-v\u1e5bnda-vanditam ||",
    "kara-cara\u1e47a-saroje k\u0101ntiman-netra-m\u012bne \u015brama-mu\u1e63i bhuja-v\u012bci-vy\u0101kule \u2019g\u0101dha-m\u0101rge | hari-sarasi vig\u0101hy\u0101p\u012bya tejo-jal\u0101ugham bhava-maru-parikhinnah khedam adya tyaj\u0101mi ||"
  ];
  function four(s){
    if(!s) return s;
    if(s.indexOf("\n")>=0) return s;
    var bits=s.split("|").map(function(x){ return x.replace(/\|/g,"").trim(); }).filter(Boolean);
    function two(t){
      var w=t.split(/\s+/);
      if(w.length<5) return t;
      var i=Math.ceil(w.length/2);
      return w.slice(0,i).join(" ")+"\n"+w.slice(i).join(" ");
    }
    if(bits.length>=2) return two(bits[0])+" |\n"+two(bits[1])+" ||";
    return two(s);
  }
  m.zeilen.forEach(function(z, n){
    if(iast[n]) z.sa = four(iast[n]);
    else z.sa = four(z.sa);
  });
  m.hinweisDe = "Strophen vierzeilig wie im Prathana-Heft Seiten 38 bis 42.";
  m.hinweisEn = "Stanzas in four booklet lines, Prathana pages 38 to 42.";
})();
