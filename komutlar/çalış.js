const Discord = require('discord.js');
const fs = require('fs');
let bal = require('../bakiye.json');
let works = require('../data/çalış.json');

exports.run = async (client, message, args, color) => {
  
  if(!bal[message.author.id]){
    bal[message.author.id] = {
      balance: 0
    };
  } 
  if(!works[message.author.id]) {
  	works[message.author.id] = {
  	 work: 0
  	};
  } 

  const Jwork = require('../data/çalış.json');
  const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];
  var random = Math.floor(Math.random() * 20) + 3;
  let curBal = bal[message.author.id].balance 
  bal[message.author.id].balance = curBal + random;
  let curWork = works[message.author.id].work
  works[message.author.id].work = curWork + 1;
  fs.writeFile('../data/çalış.json', JSON.stringify(works, null, 2), (err) => {
  	if (err) console.log(err)
  	})
  fs.writeFile('../bakiye.json', JSON.stringify(bal, null, 2), (err) => {
    let embed = new Discord.RichEmbed() 
    .setColor(color) 
    .setDescription(`
    **\💼 | ${message.author.username}**, Amelilik yapmak zor! ${JworkR} 💴 **${random}**
    `) 
    message.channel.send(embed)
    if (err) console.log(err)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çalış'],
  permLevel: 0 
};

exports.help = {
  name: 'çalış',
  category: "ekonomi",
  description: 'Amelelik yaparsınız.',
  usage: '${p}çalış'
};