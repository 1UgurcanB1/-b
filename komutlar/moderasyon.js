const Discord = require('discord.js')
exports.run = async (client, message, args) => {

  let commandSize = 0
  let embed = new Discord.RichEmbed()
    .setColor("0x36393E")
  if (!args[0]) {
    embed.setAuthor("Komut Listesi", message.author.avatarURL)
    let commands = client.commands.filter(cs => cs.help.category == 'moderasyon')
    commands = commands.map(cmd => cmd.help.name)
    if (commands.length <= 0) return
    commandSize += commands.length
    embed.addField('Moderasyon Komutları', `\`${commands.sort().join("`, `")}\``)
    embed.setFooter(`Moderasyon Komutu Sayısı: ${commandSize}`)

    return message.channel.send(embed)
  }
}

exports.conf = { 
    enabled: true,
    guildOnly: false,
    aliases: ['moderasyon'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'moderasyon',
    category: 'bilgi',
    description: 'Moderasyon komutları hakkında bilgi alırsınız.',
    usage: 'c!moderasyon'
  };