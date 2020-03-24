const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
let p = ayarlar.prefix;
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode("");
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Kullanım ${p}komutara [Komut].`);
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
        message.channel.sendCode
      const bilgi = new Discord.RichEmbed()
    .setTitle(`**${p}${command.help.name}** Komudu Hakkında Bilgiler`)
    .setColor("RANDOM")   
    .setDescription(`Komut Adı ===> **${p}${command.help.name}** \nDoğru Kullanımı ===> **${command.help.usage}** \nAlternatif Komutlar ===> **${p}${command.conf.aliases}** \nKomut Açıklaması ===> **${command.help.description}** `)
    .setAuthor(message.author.username, message.author.avatarURL)
    return message.channel.sendEmbed(bilgi)
    
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut'],
  permLevel: 0 
};

exports.help = {
  name: 'komutara',
  category: "bilgi",
  description: 'Komutlar Hakkında Yardım Alırsnız.',
  usage: '${p}bilgi [komut]'
};