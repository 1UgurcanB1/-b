const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`TRCyber`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField('``TRCyber - Yardım``', ':white_small_square:| **c!moderasyon**: Moderasyon komutları görün!\n:white_small_square:| **c!eglence**: Eğlenceli,oyun komutları görün!\n:white_small_square:| **c!kayıt**:Kayıt ayarlarını gösterir\n:white_small_square:| **c!profil**:Deneme sürümünde olan level komutların olduğu yer!\n:white_small_square:| **c!bilgi**:Kendiniz yada bot sunucu hakkında bilgi veren komutlar!\n:white_small_square:| **c!myardım**:müzik komutlarının olduğu yer!\n:white_small_square:| **c!Ekonomi**:Ekonomi menüsünü gösterir')
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    category: "bilgi",
    description: 'yardım',
    usage: 'yardım'
  };