const { Client, Intents, MessageComponentInteraction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Booru = require('booru');
const fs = require('fs');
const timedelay = 600000; // 600000 10 minutes
const config = require('./config.json');
const got = require('got');







const { 

    mona,yanfei,lumine,beidou,jean,lisa,baal,yoimiya,keqing,sucrose,ningguang,rosaria,eula,ayaka,sara,ganyu,signora,amber,yae,xiangling,fischl,noelle,xinyan,kokomi,hutao

} = config;




const monafile= "./images/mona.txt";
const yanfeifile = "./images/yanfei.txt";
const ventifile = "./images/venti.txt";
const luminefile = "./images/lumine.txt";
const beidoufile = "./images/beidou.txt";
const jeanfile = "./images/jean.txt";
const lisafile = "./images/lisa.txt";
const baalfile = "./images/baal.txt";
const yoimiyafile = "./images/yoimiya.txt";
const keqingfile = "./images/keqing.txt"
const sucrosefile = "./images/sucrose.txt";
const ningguangfile = "./images/ningguang.txt";
const rosariafile = "./images/rosaria.txt";
const eulafile = "./images/eula.txt";
const ayakafile = "./images/ayaka.txt";
const sarafile = "./images/sara.txt";
const ganyufile = "./images/ganyu.txt";
const signorafile = "./images/signora.txt";
const amberfile = "./images/amber.txt";
const yaefile = "./images/yae.txt";
const xianglingfile = "./images/xinagling.txt";
const fischlfile = "./images/fischl.txt";
const noellefile = "./images/noelle.txt";
const xinyanfile = "./images/xinyan.txt";
const kokomifile = "./images/kokomi.txt";
const hutaofile = "./images/hutao.txt";





client.on('ready', async () => { 
    let check = (cid, link, filename) => {

        if(typeof link === 'undefined'){
            console.log("undefined");
        }
        fs.readFile(filename,async function (err, data) {
            if (err) throw err;
            if(!data.includes(link)) {
                fs.appendFile(filename, `\n${link}`,async function (err) {
                    if (err) {
                       throw err;
                      };
                     sendecchi(cid, link);
                  });
            }
          });
    };

    let sendecchi = async (chann, address) =>{
      if( typeof address !== 'undefined' && address){
        await client.channels.cache.get(chann).send(address); 
    };

};


    setInterval(function() { //mona
     
        Booru.search('gb', ['-rating:questionable','mona_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let monaurl = posts[0].fileUrl; 
         check(mona,monaurl,monafile);
        });
  
    }, (timedelay ));


       setInterval(function() { //yanfei
      
        Booru.search('gb', ['-rating:questionable','yanfei_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let yanfeiurl = posts[0].fileUrl; 
         check(yanfei,yanfeiurl,yanfeifile);
        });
   
    }, (timedelay + 3000 ));

    

 

    setInterval(function() { //lumine
     
        Booru.search('gb', ['-rating:questionable','lumine_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let lumineurl = posts[0].fileUrl; 
         check(lumine,lumineurl,luminefile);
        });
  
    }, (timedelay + 4000 ));


    setInterval(function() { //beidou
     
        Booru.search('gb', ['-rating:questionable','beidou_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let beidouurl = posts[0].fileUrl; 
         check(beidou,beidouurl,beidoufile);
        });
  
    }, (timedelay + 5000 ));

    setInterval(function() { //jean
     
        Booru.search('gb', ['-rating:questionable','jean_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let jeanurl = posts[0].fileUrl; 
         check(jean,jeanurl,jeanfile);
        });
  
    }, (timedelay + 5000 ));


    setInterval(function() { //lisa
      
        Booru.search('gb', ['-rating:questionable','lisa_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let lisaurl = posts[0].fileUrl; 
         check(lisa,lisaurl,lisafile);
        });
   
    }, (timedelay + 6000 ));

    

    setInterval(function() { //baal
     
        Booru.search('gb', ['-rating:questionable','raiden_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let baalurl = posts[0].fileUrl; 
         check(baal,baalurl,baalfile);
        });
  
    }, (timedelay + 7000 ));

    setInterval(function() { //yoimiya
     
        Booru.search('gb', ['-rating:questionable','yoimiya_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let yoimiyaurl = posts[0].fileUrl; 
         check(yoimiya,yoimiyaurl,yoimiyafile);
        });
  
    }, (timedelay + 8000 ));



    setInterval(function() { //keqing
      
        Booru.search('gb', ['-rating:questionable','keqing_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let keqingurl = posts[0].fileUrl; 
         check(keqing,keqingurl,keqingfile);
        });
   
    }, (timedelay + 9000 ));

    


    setInterval(function() { //sucrose
      
        Booru.search('gb', ['-rating:questionable','sucrose_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let sucroseurl = posts[0].fileUrl; 
         check(sucrose,sucroseurl,sucrosefile);
        });
   
    }, (timedelay + 10000 ));

    
    setInterval(function() { //ningguang
      
        Booru.search('gb', ['-rating:questionable','ningguang_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let ningguangurl = posts[0].fileUrl; 
         check(ningguang,ningguangurl,ningguangfile);
        });
   
    }, (timedelay + 11000 ));

    

    
    setInterval(function() { //rosaria
      
        Booru.search('gb', ['-rating:questionable','rosaria_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let rosariaurl = posts[0].fileUrl; 
         check(rosaria,rosariaurl,rosariafile);
        });
   
    }, (timedelay + 12000 ));

    setInterval(function() { //eula
      
        Booru.search('gb', ['-rating:questionable','eula_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let eulaurl = posts[0].fileUrl; 
         check(eula,eulaurl,eulafile);
        });
   
    }, (timedelay + 13000 ));


    setInterval(function() { //akaya
      
        Booru.search('gb', ['-rating:questionable','ayaka_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let ayakaurl = posts[0].fileUrl; 
         check(ayaka,ayakaurl,ayakafile);
         
        });
   
    }, (timedelay + 14000 ));



    setInterval(function() { //sara
      
        Booru.search('gb', ['-rating:questionable','kujou_sara_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let saraurl = posts[0].fileUrl; 
         check(sara,saraurl,sarafile);
         
        });
   
    }, (timedelay + 15000 ));

    setInterval(function() { //ganyu
      
        Booru.search('gb', ['-rating:questionable','ganyu_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let ganyuurl = posts[0].fileUrl; 
         check(ganyu,ganyuurl,ganyufile);
         
        });
   
    }, (timedelay + 16000 ));

    setInterval(function() { //signora
      
        Booru.search('gb', ['-rating:questionable','signora_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let signoraurl = posts[0].fileUrl; 
         check(signora,signoraurl,signorafile);
         
        });
   
    }, (timedelay + 17000 ));

    setInterval(function() { //amber
      
        Booru.search('gb', ['-rating:questionable','amber_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let amberurl = posts[0].fileUrl; 
         check(amber,amberurl,amberfile);
         
        });
   
    }, (timedelay + 18000 ));

    
    setInterval(function() { //yae
      
        Booru.search('gb', ['-rating:questionable','yae_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let yaeurl = posts[0].fileUrl; 
         check(yae,yaeurl,yaefile);
         
        });
   
    }, (timedelay + 19000 ));
    
    setInterval(function() { //fischl
      
        Booru.search('gb', ['-rating:questionable','fischl_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let fischlurl = posts[0].fileUrl; 
         check(fischl,fischlurl,fischlfile);
         
        });
   
    }, (timedelay + 20000 ));

    setInterval(function() { //noelle
      
        Booru.search('gb', ['-rating:questionable','noelle_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let noelleurl = posts[0].fileUrl; 
         check(noelle,noelleurl,noellefile);
         
        });
   
    }, (timedelay + 21000 ));

    setInterval(function() { //xinyan
      
        Booru.search('gb', ['-rating:questionable','xinyan_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let xinyanurl = posts[0].fileUrl; 
         check(xinyan,xinyanurl,xinyanfile);
         
        });
   
    }, (timedelay + 22000 ));

    setInterval(function() { //kokomi
      
        Booru.search('gb', ['-rating:questionable','kokomi_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let kokomiurl = posts[0].fileUrl; 
         check(kokomi,kokomiurl,kokomifile);
         
        });
   
    }, (timedelay + 23000 ));

    setInterval(function() { //hutao

        Booru.search('gb', ['-rating:questionable','hu_tao_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
          let hutaourl = posts[0].fileUrl; 
         check(hutao,hutaourl,hutaofile);
         
        });
   
    }, (timedelay + 24000 ));





































/*
   setInterval(function() { //venti
      
        Booru.search('gb', ['-rating:questionable','venti_(genshin_impact)'], { limit: 1, random: true })
        .then(async posts => {
         if(posts && typeof posts[0].fileUrl != "undefined"){
         let ventiurl = posts[0].fileUrl; 
         
          check(venti,ventiurl,ventifile);
       }
        });
   
    }, (timedelay + 1000 ));
*/





})









client.login(config.token)