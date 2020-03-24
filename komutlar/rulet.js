let fs = require('fs');
let bal = require("../bakiye.json");
const { bot_prefix } = require('../ayarlar.json');

function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}

exports.run = (client, message, args) => {
  let prefix = bot_prefix;
    if(!bal[message.author.id]){
      bal[message.author.id] = {
        balance: 0
      };
    } 
    
    let colour = args[0];
    let money = args[1];
    
    
    if (!money) return message.channel.send(`Kullanımı: \`c!rulet <siyah, kırmızı, yeşil> <bakiye>\`\nİstediğiniz renklerden birini seçin ... ancak bazıları diğerlerinden daha olasıdır ...\n**Siyah çift sayılar içindir**... **Kırmızı biraz karmaşık...Eğer kırmızı gelirse size 1.5 katı bakiye verir**.\nBir risk al ve ** Yeşil ** seç ve ** 14 kat daha fazla para kazanabilirsin ** ... ancak 37'de bir ihtimal.`); //help
    if (isNaN(money)) return message.channel.send(`**${message.author.username}**, Miktar girin!`);
    if (money > 500) money = 500;
    if (bal[message.author.id].balance < money) return message.channel.send(`**${message.author.username}**, Üzgünüz, sahip olduğunuzdan daha fazla bahis oynuyorsunuz!`);
    if (!colour)  return message.channel.send(`**${message.author.username}**, YSadece Siyah,Kırmızı ve Yeşil seçebilirsin.`);
    colour = colour.toLowerCase()
    
    if (colour == "b" || colour.includes("siyah")) colour = 0;
    else if (colour == "r" || colour.includes("kırmızı")) colour = 1;
    else if (colour == "g" || colour.includes("yeşil")) colour = 2;
    else return message.channel.send(`**${message.author.username}**, Sadece Siyah,Kırmızı ve Yeşil seçebilirsin`);
    
    let random = Math.floor(Math.random() * 37);
    
    if (random == 0 && colour == 2) { // Hijau
        money *= 14
      let curBal1 = bal[message.author.id].balance
      bal[message.author.id].balance = curBal1 + money;
        fs.writeFile('../bakiye.json', JSON.stringify(bal, null, 2), (err) => {
        message.channel.send(`**${message.author.username}**, 💚 **-Botunuzun Adı-** Kazandın 💴 **${money}** 💚 |Gelen  **${random}**`);
          if(err) console.log(err)
        });
    } else if (isOdd(random) && colour == 1) { // Merah
        money = money * 1.5
      let curBal2 = bal[message.author.id].balance
      bal[message.author.id].balance = curBal2 + money
        fs.writeFile('../bakiye.json', JSON.stringify(bal, null, 2), (err) => {
        message.channel.send(`**${message.author.username}**, 🔴 Kazandın! 💴 **${money}** 🔴 | Gelen Numara: **${random}**`);
          if(err) console.log(err) 
        });
    } else if (!isOdd(random) && colour == 0) { // Hitam
        money = money * 1.5
      let curBal3 = bal[message.author.id].balance
      bal[message.author.id].balance = curBal3 + money
        fs.writeFile('../bakiye.json', JSON.stringify(bal, null, 2), (err) => {
        message.channel.send(`**${message.author.username}**, ⚫ Kazandın! 💴 **${money}** ⚫| Gelen Numara: **${random}**`);
          if(err) console.log(err) ;
        });
    } else { 
      let curBal4 = bal[message.author.id].balance
        bal[message.author.id].balance = curBal4 - money;
        fs.writeFile('../bakiye.json', JSON.stringify(bal, null, 2), (err) => {
        message.channel.send(`**${message.author.username}**, Maalesef Kaybettin 💴 **${money}** | Gelen Numara: **${random}**`);
          if(err) console.log(err) 
        });
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rulet'],
  permLevel: 0 
};

exports.help = {
  name: 'rulet',
  category: "ekonomi",
  description: 'Rulet atarsınız.',
  usage: '${p}rulet <renk-sayı>'
};