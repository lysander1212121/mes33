const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Oyuncular Şehri | J4J BOT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let oyuncularsehri = await data.get(msg.author.id)
        
        if (oyuncularsehri === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", oyuncularsehri => {
  sleep(1000);
  if (
    oyuncularsehri.id === "350467905391034391" ||  // j4j sunucusunun idsi
    oyuncularsehri.id === "350467905391034391"  // j4j sunucusunun idsi
  ) {
    
  } else {
    oyuncularsehri.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("571665739124047872") // j4j sunucusunun kanal id'si


       a.send("**Trading Shard! and Lucid leaf! and King slime ---- My Shard Lf; Best secret or upgrade Nlf; Shinny lim and Link scammer  or Scammer ---- My lucid leaf! Lf Upgrade or 2-2.5k shinny limited Nlf; Link scammer  or Scammer ---- My King slime Lf 1.5k shinny limited Nlf Link scammer  or Scammer**")

     }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("571665739124047872") // j4j sunucusunun kanal id'si


       a.send("**Trading Shard! and Lucid leaf! and King slime ---- My Shard Lf; Best secret or upgrade Nlf; Shinny lim and Link scammer  or Scammer ---- My lucid leaf! Lf Upgrade or 2-2.5k shinny limited Nlf; Link scammer  or Scammer ---- My King slime Lf 1.5k shinny limited Nlf Link scammer  or Scammer**")


      }, 60000);
})

client.login("NzM3MzI3NDg2MjQwNTU1MDM5.X7J0Mg.6H3gLUp7hDUEiRGevR33L_2soUs") // user tokeniniz
