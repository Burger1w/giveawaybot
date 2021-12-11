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

.setTitle("  » HAYLAZ  ")

.setThumbnail("")

.setDescription(

`**» Bağlantılar**

**[Destek Sunucusu](https://discord.gg/yhdrZFkevJ)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=&permissions=8&scope=bot)** **•** **[Web-Site]()**

Bir komut hakkında detaylı __yardım için__: **g.yardım**
**• Komutlar**

> [g.başlat](https://discord.gg/yhdrZFkevJ) → Çekiliş Başlatırsınız..

> [g.sil](https://discord.gg/yhdrZFkevJ) → Çekilişi İptal Edersiniz.

> [g.edit](https://discord.gg/yhdrZFkevJ) → çeklişi editlersiniz.

> [g.bitir](https://discord.gg/yhdrZFkevJ) → Çekilişi Bitirmeye Yarar.

> [g.sesgir](https://discord.gg/yhdrZFkevJ) → Botu Ses Kanalına .

> [g.ey / g.emojiyükle](https://discord.gg/yhdrZFkevJ) → Emoji Yüklersiniz .

> [g.nuke](https://discord.gg/yhdrZFkevJ) → Kanala Nuke Atar .

> [g.istatistik](https://discord.gg/yhdrZFkevJ) → Botun İstatistiklerine Bakarsınız .

**• Bilgilendirme**

> ✅ **Discord Js Sürümü : 12.5.0**

> ✅ **Yapımcım : <@905825401039912970>**

> ✅ **Sürümüm : 2.0.1**

 

`

)

    .setImage(

      "https://media.discordapp.net/attachments/608711485849337856/918910347019169863/Anime_PP_Gif_54.gif"

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
