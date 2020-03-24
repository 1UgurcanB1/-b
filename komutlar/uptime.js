const { Client, RichEmbed, Collection, member } = require("discord.js");
const { stripIndents } = require("common-tags");

exports.run = async (client, message, args) => {
          function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return 'Bot Time:', stripIndents `**⏰ Çalıştığım süre: ⏰**
            **> ⏰ Gün:** >>> **${days.padStart(1, '0')}** ⏳, 
            **> ⏰ Saat:** >>> **${hrs.padStart(2, '0')}** ⏳, 
            **> ⏰ Dakika:** >>> **${min.padStart(2, '0')}** ⏳, 
            **> ⏰ Saniye:** >>> **${sec.padStart(2, '0')}** ⏳. `

        }

       message.channel.send(`${duration(client.uptime)}`)

    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['uptime'],
 permLevel: 2
};

exports.help = {
 name: 'uptime',
 description: 'botun çalıştığı süreyi gösterir',
 category: 'moderasyon',
 usage: '<prefix>uptime'
};
 