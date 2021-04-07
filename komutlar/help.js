const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Bilal = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Kardeşler Çekiliş 🎉")
    .setDescription(
      `**Selam ${message.author.username} Yardım Listeme Hoşgeldin.**
      
<:krdslr_mavi_ok:819555060295270471> **Çekiliş Başlatma Komutu = \`\!başlat [#Çekiliş_Kanalı] [Zaman] [Kazanacak_Sayı] [Ödül]\`**

<:krdslr_mavi_ok:819555060295270471> **Çekiliş Yenileme Komutu = \`\!yenile [Mesaj_ID]\`**

<:krdslr_mavi_ok:819555060295270471> **Çekiliş Bitirme Komutu = \`\!bitir [Mesaj_ID]\`**

<:krdslr_mavi_ok:819555060295270471> **Ping/Gecikme Komutu = \`\!ping\`**`
    )
    .setFooter(
      `Kardeşler Çekiliş | ${message.author.username} Tarafından İstendi.`
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
