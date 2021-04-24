const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Bilal = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Vengaful Çekiliş 🎉")
    .setDescription(
      `**Selam ${message.author.username} Yardım Listeme Hoşgeldin.**
      
» **Çekiliş Başlatma Komutu = \`\!başlat [#Çekiliş_Kanalı] [Zaman] [Kazanacak_Sayı] [Ödül]\`**

» **Çekiliş Yenileme Komutu = \`\!yenile [Mesaj_ID]\`**

» **Çekiliş Bitirme Komutu = \`\!bitir [Mesaj_ID]\`**

» **Ping/Gecikme Komutu = \`\!ping\`**`
    )
    .setFooter(
      `Vengaful Çekiliş | ${message.author.username} Tarafından İstendi.`
    );
  message.inlineReply(Bilal);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"]
};

module.exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
