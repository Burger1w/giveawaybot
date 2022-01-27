const Discord = require ("discord.js");

exports.run = (client, message) => {

  if (!message.guild) {

    const ozelmesajuyari = new Discord.MessageEmbed()

    .setColor(0xFF0000)

    .setTimestamp()

    .setAuthor(message.author.username, message.author.avatarURL)

    .addField('Komutları Özel Mesajlarda Kullanılamaz!')

    return message.author.send(ozelmesajuyari); }

const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")

.setTitle("  » LAREX  ")

.setThumbnail("")

.setDescription(

`**» Bağlantılar**

**[Destek Sunucusu](https://discord.gg/hVQ73UfzWd)** **•** **[Botun Davet Linki](OTM2MTk2OTU0NTc1MjA4NDU5.YfJrWw.vhAqXLprJI_WN6SUbYFYdfcvlyg)**

**• Komutlar •**

> [.başlat](https://discord.gg/hVQ73UfzWd) → Çekiliş Başlatırsınız..

> [.bitir](https://discord.gg/hVQ73UfzWd) → Çekilişi Bitirirsiniz.

> [.edit](https://discord.gg/hVQ73UfzWd) → Çekilişi Düzenlersiniz.

> [.istatistik](https://discord.gg/hVQ73UfzWd) → Botun .

> [.istatistik](https://discord.gg/hVQ73UfzWd) → Botun İstatistiklerine Bakarsınız .

**• Bilgilendirme**

> ✅ **Discord Js Sürümü : 12.5.0**

> ✅ **Yapımcım : <@678232629211824179>**

> ✅ **Sürümüm : 2.0.1**

 

`

)

    .setImage(

      "https://media.discordapp.net/attachments/678242754479915021/928791919297970176/standard_1.png"

    );

return message.channel.send(EmbedCrewCode)

.then; 

};

exports.conf = {

    enabled: true, 

    guildOnly: false, 

    aliases: [], 

    permLevel: 0 

};

  exports.help = {

    name: 'yardım', 

    description: 'Botun Komut Listesini Gösterir!',

    usage: '-yardım'

};
