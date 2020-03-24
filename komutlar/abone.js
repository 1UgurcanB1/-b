const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {

      const channelId= args.join(' ')
      if(!channelId) return message.channel.send("**Lütfen kanal id'sini yazın!\nID'yi Nasıl bulurum?\nGirdiğiniz Youtube Kanalına www.youtube.com/channel/İd kısmında ki id yi yazın!**");
      
      const apiKey = "AIzaSyA7xkeAh4oVtUP4oiXSgl9JQFyAQwvuA3c"; 

      const data = await(await fetch(`https://apis.duncte123.me/youtube/${apiKey}/${channelId}`)).json()                         
                         
       message.channel.send(`Kanalın Toplam **${data.data.subs}** abonesi ve **${data.data.views}** toplam izlenmeye sahip`);
      
        
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['subcount', 'abone'],
  pemlevel: 0
};

exports.help = {
  name: 'abone',
  category: "bilgi",
  description: 'İstediğiniz kanalın abone sayısını gösterir',
  usage: 'abone <kanal id>'
};