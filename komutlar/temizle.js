const Discord = require('discord.js');

exports.run = function(client, message, args) {
//Komutun Kodları
  const m = args.join(' ');
  if(!m) return message.channel.send('**:gear: Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:xx: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(m < 2) return message.channel.send(':gear: **En az 2 mesaj silebilirim!**')
 if(m>100) return message.channel.send('**:gear: En fazla 100 mesaj silebilirim!**')
  message.channel.bulkDelete(m);
  

  message.channel.send(
  new Discord.RichEmbed()
    .setTitle('TRCyber | :gear: **Başarılı!**')
    .setDescription('**Başarı ile __'+m+'__ mesaj sildim! :gear:**')
  .setColor('RANDOM')
  ).then(i=>{
    i.react(':gear: 585186945471086620')
  }  
  )
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'süpür', 'temizle'],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  category: "moderasyon",
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};