const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => { 
    console.log(`UgurcanB | Bot Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const ytdl = require('ytdl-core');
const chalk = require('chalk');
const fs = require('fs');
const { Client, Util } = require('discord.js');
const { token, apikey } = require('./ayarlar.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(apikey);
const queue = new Map();
const antispam = require("discord-anti-spam-tr");
const Jimp = require('jimp');
const ffmpeg = require('ffmpeg');
const veri = require('quick.db');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.ayar = db
const useful = require('./x.js');
client.useful = useful;
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
require("./modüller/fonksiyonlar.js")(client);
client.config = require("./ayarlar.json");
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildMemberAdd', async member => {
  let püye = await db.fetch(`panelüye_${member.guild.id}`);
  let pbot = await db.fetch(`panelbot_${member.guild.id}`);
  let pkanal = await db.fetch(`panelkanal_${member.guild.id}`);
  
  if (!püye) return
  if (!pbot) return
  if (!pkanal) return
  
  member.guild.channels.get(püye).setName(`Üye sayısı: ${member.guild.memberCount}`)
  member.guild.channels.get(pbot).setName(`Bot sayısı: ${member.guild.members.filter(m => m.user.bot).size}`)
  member.guild.channels.get(pkanal).setName(`Kanal sayısı: ${member.guild.channels.size}`)
})
client.on('guildMemberRemove', async member => {
  let püye = await db.fetch(`panelüye_${member.guild.id}`);
  let pbot = await db.fetch(`panelbot_${member.guild.id}`);
  let pkanal = await db.fetch(`panelkanal_${member.guild.id}`);
  
  if (!püye) return
  if (!pbot) return
  if (!pkanal) return
  
  member.guild.channels.get(püye).setName(`Üye sayısı: ${member.guild.memberCount}`)
  member.guild.channels.get(pbot).setName(`Bot sayısı: ${member.guild.members.filter(m => m.user.bot).size}`)
  member.guild.channels.get(pkanal).setName(`Kanal sayısı: ${member.guild.channels.size}`)
})


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', async message => {
const i = await db.fetch(`prefix_${message.guild.id}`);
           
           if (message.author.bot) return
      let pref;
         
         if (i) {
          pref = i
         } else {
          pref = '/'
         }
  if (!i) { db.set(`prefix_${message.guild.id}`, '/') }

if(message.content == client.user) {
  message.reply(`Bu Sunucudaki Prefix: ${pref}`)
}
  
let mesaj = message.content.toLowerCase();
let cont = message.content.slice(pref.length).split(" ");
let args = cont.slice(1);
  let ops = {
}
}
)

client.on('message', async message => {
    if (db.has(`spen_${message.guild.id}`) === false) return;

    let sp = await db.fetch(`spamp_${message.author.id}`);
    let sk = await db.fetch(`spamk_${message.guild.id}`);
    let sb = await db.fetch(`spamb_${message.guild.id}`);
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    
    if (sp === 7) {
      
      const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(`${message.member} eğer spam yapmaya devam edersen mutelerim!`)
      .setColor("RANDOM")
      message.channel.send(embed).then(msg => msg.delete(5000));
      
    }
    if (sp === 10) {
     
        message.guild.channels.forEach(async (channel, id) => {
        message.channel.overwritePermissions(message.member, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      }); 
      
      const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(`${message.member} kullanıcısı Spam yaptığı için **5** dakika mutelendi!`)
      .setColor("RANDOM")
      message.channel.send(embed).then(msg => msg.delete(5000));
      
      const ms = require('ms');
      
      
      setTimeout(function() {
        db.delete(`spamp_${message.author.id}`)
        message.guild.channels.forEach(async (channel, id) => {
        message.channel.overwritePermissions(message.member, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true,
        });
      });
      
      }, ms('5m')) 
if (!sk) return  
      
    if (sp === sk) {
    
     const embed = new Discord.RichEmbed() 
     .setAuthor(client.user.username, client.user.avatarURL) 
     .setDescription(`${message.member} kullanıcısı **${sk}** kez spam yaptığı için sunucudan atıldı!`)
     .setColor("RANDOM")
     message.channel.send(embed)
      
     message.guild.member(message.member).kick();
    
    } 
    if (sp === sb) {
    
     const embed = new Discord.RichEmbed() 
     .setAuthor(client.user.username, client.user.avatarURL) 
     .setDescription(`${message.member} kullanıcısı **${sb}** kez spam yaptığı için sunucudan banlandı!`)
     .setColor("RANDOM")
     message.channel.send(embed)
    
      message.guild.ban(message.member, 2);
    }
}})


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı sikerim') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir git') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktin') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'anan') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'skm') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))

	

     }
       }

     }

   }
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı') {
    msg.delete(100);
    msg.reply('**Argo Kelime Kullanma**');
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'çal' || command === "p" ) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send(new Discord.RichEmbed()
      .setColor('RANDOM')
    .setDescription(':warning: | **İlk olarak sesli bir kanala giriş yapmanız gerek.**'));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
      return msg.channel.send(new Discord.RichEmbed()
      .setColor('RANDOM')
			.setTitle(':warning: | **Gerekli yetkiye sahip değilim!**'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.send(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':warning: | **Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.**'));
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`**✅ | Oynatma Listesi: **${playlist.title}** Kuyruğa Eklendi!**`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
				 msg.channel.send(new Discord.RichEmbed()                  
         .setTitle(' TRCyber | Şarkı Seçimi')
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 10 saniye içinde liste iptal edilecektir.')
         .setColor('RANDOM'));
          msg.delete(5000)
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.send(new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(':warning: | **Şarkı Değeri Belirtmediğiniz İçin Seçim İptal Edilmiştir**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(new Discord.RichEmbed()
          .setColor('RANDOM')
          .setDescription(':( | **Aradım Fakat Hiç Bir Sonuç Çıkmadı**'));
                }
            }
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'geç' || command === "s" || command === "skip") {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('TRCyber :warning: | **Lütfen öncelikle sesli bir kanala katılınız**.'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('TRCyber :warning: | **Hiç Bir Müzik Çalmamakta**'));                                              
		serverQueue.connection.dispatcher.end('**Müziği Geçtim!**');
		return undefined;
	} else if (command === 'durdur' || command == "stop") {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('**:warning: | Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle(':warning: **| Hiç Bir Müzik Çalmamakta**'));                                              
		msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Müzik Durduruldu`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**Müzik Bitti**');
	} else if (command === 'volume' || command === 'ses') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.send(new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription(':warning: **| Lütfen öncelikle sesli bir kanala katılınız.**'));
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle(':warning: | **Hiç Bir Müzik Çalmamakta**')); 
		if (!args[1]) return msg.channel.send(`Şuan ki ses seviyesi: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(`:hammer:  Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
    .setColor('RANDOM'));     
	} else if (command === 'çalan' || command === "song" || command === "current" || command === "şarkı") {
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: | **Çalan Müzik Bulunmamakta**")
    .setColor('RANDOM'));
		return msg.channel.send(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("🎶TRCyber | Çalan")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
	} else if (command === 'sıra' || command === "liste" || command === "queue") {
    let index = 0;
		if (!serverQueue) return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: | **Sırada Müzik Bulunmamakta**")
    .setColor('RANDOM'));
		  return msg.channel.send(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('🎶TRCyber | Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
	} else if (command === 'dur' || command === "pause") {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(new Discord.RichEmbed()
      .setTitle("**:pause_button: Müzik Senin İçin Durduruldu!**")
      .setColor('RANDOM'));
		}
		return msg.channel.send(':warning: | **Çalan Müzik Bulunmamakta**');
	} else if (command === 'devam' || command === "devam-et" || command === "devamet" || command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send(new Discord.RichEmbed()
      .setTitle("**:arrow_forward: Müzik Senin İçin Devam Etmekte!**")
      .setColor('#FF0000'));
		}
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(":warning: ** | Çalan Müzik Bulunmamakta.**")
    .setColor('#FF0000'));
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`:warning:|Ses kanalına katılamadım: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`:warning:|ISes kanalına katılamadım could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		return msg.channel.send(new Discord.RichEmbed()
    .setTitle(`:arrow_heading_up:  **${song.title}** Adlı Müzik Kuyruğa Eklendi!`)
    .setColor('RANDOM'))
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === ' :x:  | **Yayın Akış Hızı Yeterli Değil.**') console.log('Müzik Bitti.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	 serverQueue.textChannel.send(new Discord.RichEmbed()                                   
  .setTitle("**TRCyber | 🎶 Müzik Başladı**",`https://cdn.discordapp.com/avatars/473974675194511361/6bb90de9efe9fb80081b185266bb94a6.png?size=2048`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('RANDOM'));
}  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
antispam(client, {
  uyarmaSınırı: 4, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 7, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 8,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 12, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş" // Spam Atan Kullanıcılar Verilecek Röl
}); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("guildCreate", guild => {
  let rrrsembed = new Discord.RichEmbed()

    .setColor("RED")
    .setTitle("Botumuzu Ekledi  ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("658743868401123338").send(rrrsembed);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "kanal-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **kabul** yazınız.`
    );
    if (!message.member.hasPermission("Yönetici"))
      if (message.author.id !== "456406598961856512")
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel
      .awaitMessages(response => response.content === "kabul", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Bot Kanalları|▬▬|", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("「✔」kurallar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「💚」gelen-giden", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「👑」sayaç", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🔥」log-kanalı", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🎃」duyuru-odası", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Genel Kanallar|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`「🎁」şikayet-ve-öneriler`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👥」video-duyurular`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「📷」galeri-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「🤖」bot-komut`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👻」sohbet-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );

        message.guild
          .createChannel(`🌹》Kurucu Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");

            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Ses Kanalları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`👍》Sesli Yönetici Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");
            let role3 = message.guild.roles.find("name", "Yönetici");
            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
            c.overwritePermissions(role3, {
              CONNECT: true
            });
          });

        message.guild
          .createChannel(`💬》Sesli Sohbet Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Oyun Odaları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`🎮》Lol Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Zula Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Counter Strike Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Pubg Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Fortnite Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》MineCraft Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》RobLox Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》WolfTeam Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );

        message.channel.send("Gerekli Herşey Kuruldu İyi Eğelenceler!");
      });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.ekoayarlar = {
  parabirimi: "Para",
  botunuzunprefixi: "c!",
  botunuzunidsi: "665458211247226890",
  botismi: "TRCyber",
  renk: "RANDOM", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "Bilinmiyor", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  rastgelepara: true, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 10, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 200, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  dbloy: false, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "KEY", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  dblmsj: "Bu komutu kullanabilmek için bota oy vermelisiniz. Oy vermek için c!oyver", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
  başlangıçparası: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  admin: [""]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



client.login(ayarlar.token);