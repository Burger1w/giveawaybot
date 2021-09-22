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

.setTitle("  » Elentra  ")

.setThumbnail("")

.setDescription(

`**» Bağlantılar**

**[Destek Sunucusu](https://discord.gg/MgmuBzHZa5)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=844262256077832194)** **•** **[Web-Site]()**

Bir komut hakkında detaylı __yardım için__: **g.yardım**
**• Komutlar**

> [g.başlat](https://discord.gg/MgmuBzHZa5) → Çekiliş Başlatırsınız..

> [g.sil](https://discord.gg/MgmuBzHZa5) → Çekilişi İptal Edersiniz.

> [g.edit](https://discord.gg/MgmuBzHZa5) → çeklişi editlersiniz.

> [g.bitir](https://discord.gg/MgmuBzHZa5) → Çekilişi Bitirmeye Yarar.

> [g.sesgir](https://discord.gg/MgmuBzHZa5) → Botu Ses Kanalına Sokarsınız.


**• Bilgilendirme**

> <:hata:880833088316375090> **Discord Js Sürümü : 12.5.0**

> <:dev:880833050727030864> **Yapımcım : <@800647869555802133>**

> <:sag_ok:880833009538961489> **Sürümüm : 2.0.1**

© 2020 Galaktik | Tüm hakları saklıdır.

`

)

    .setImage(

      "https://media.discordapp.net/attachments/879336509419966564/886145751380549642/Ekran_Alnts.PNG?width=405&height=164"

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
