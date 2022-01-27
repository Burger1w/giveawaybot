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

**• Çekiliş Komutları •**

> [.başlat](https://discord.gg/hVQ73UfzWd) → Çekiliş Başlatırsınız..

> [.bitir](https://discord.gg/hVQ73UfzWd) → Çekilişi Bitirirsiniz.

> [.edit](https://discord.gg/hVQ73UfzWd) → Çekilişi Düzenlersiniz.

> [.reroll](https://discord.gg/hVQ73UfzWd) → Çekilişteki Kazananları Tekrar Çekersiniz.

> [.sil](https://discord.gg/hVQ73UfzWd) → Çekilişi Silersiniz.

**• Genel Komutlar •**

> [.istatistik](https://discord.gg/hVQ73UfzWd) → Botun İstatiklerini Görüntülersiniz.

> [.ping](https://discord.gg/hVQ73UfzWd) → Botun Gecikme Süresini Görüntülersiniz.


✅ **» Yapımcım : <@920772525590458388>**
 

`

)

    .setImage(

      "https://cdn.discordapp.com/attachments/927908551735775293/936233702520922162/standard.gif"

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

    usage: '.yardım'

};
