module.exports.run = async (client, message, args) => {
    var v = ~~(Math.random() * 3);  // 0 to 2
    console.log("--> Döndürülüyor " + v + " Rus ruleti!");
    var deathText = "<:dizzy_face:418874338138128395>    <:boom:418874561006927881> <:gun:418869220932190228> ŞANSIZSIN! R.İ.P";
    var aliveText = "<:sweat_smile:418874817719304215>           <:gun:418869220932190228> ŞANSILISIN HAYATTASIN!";
    var defaultText = "<:smile:418868020623179797>            <:gun:418869220932190228>";

    message.channel.send(defaultText + "   3")
        .then(msg => {
            setTimeout(function() {
                msg.edit(defaultText + "   2")
                    .then(msg => {
                        setTimeout(function() {
                            msg.edit(defaultText + "   1")
                                .then(msg => {
                                    setTimeout(function() {
                                        if(v == 0){
                                            msg.edit(deathText);
                                        }else{
                                            msg.edit(aliveText);
                                        }
                                    }, 1000);
                                });
                        }, 1000);
                    });
            }, 1000);
        })
        .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rusrulet'],
  cooldown: '3',
  permLevel: 0,
};

exports.help = {
  name: 'rus ruleti',
  description: 'Rus ruleti oynarsınız.',
  category: "eglence",
  usage: 'rus ruleti'
}; 