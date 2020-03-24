const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../fonksiyon.js");

const chooseArr = ["🗻", "📰", "✂"];

exports.run = async (client, message, args) => {
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Altlarda gelen emojilerden birine bas ve oyuna  başla!!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Kazandım!";
            } else if (me === clientChosen) {
                return "Berabere";
            } else {
                return "Kaybettin!";
            }
        }
    }
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tkm'],
  permLevel: 0  
};


exports.help = {
  name: 'tkm',
  description: 'Taş kağıt makas oynarsınız.',
  category: 'eglence',
  usage: 'tkm',
};