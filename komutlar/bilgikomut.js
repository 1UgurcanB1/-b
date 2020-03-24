const Discord = require('discord.js')
exports.run = async (client, message, args) => {

  let commandSize = 0
  let embed = new Discord.RichEmbed()
    .setColor("0x36393E")
  if (!args[0]) {
    embed.setAuthor("Komut Listesi", message.author.avatarURL)
    let commands = client.commands.filter(cs => cs.help.category == 'bilgi')
    commands = commands.map(cmd => cmd.help.name)
    if (commands.length <= 0) return
    commandSize += commands.length
    embed.addField('Bilgi Komutları', `\`${commands.sort().join("`, `")}\``)
    embed.setFooter(`Bilgi Komutu Sayısı: ${commandSize}`)

    return message.channel.send(embed)
  }
}

exports.conf = { 
    enabled: true,
    guildOnly: false,
    aliases: ['bilgi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'bilgi',
    category: 'bilgi',
    description: 'Bilgi komutları hakkında bilgi alırsınız.',
    usage: 'c!bilgi'
  };