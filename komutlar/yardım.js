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

**[Destek Sunucusu](https://discord.gg/hBRHeTssX5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=893570924299821066&permissions=8&scope=bot)** **•** **[Web-Site]()**

Bir komut hakkında detaylı __yardım için__: **g.yardım**
**• Komutlar**

> [g.başlat](https://discord.gg/MgmuBzHZa5) → Çekiliş Başlatırsınız..

> [g.sil](https://discord.gg/MgmuBzHZa5) → Çekilişi İptal Edersiniz.

> [g.edit](https://discord.gg/MgmuBzHZa5) → çeklişi editlersiniz.

> [g.bitir](https://discord.gg/MgmuBzHZa5) → Çekilişi Bitirmeye Yarar.

> [g.sesgir](https://discord.gg/MgmuBzHZa5) → Botu Ses Kanalına .

> [g.ey / g.emojiyükle](https://discord.gg/MgmuBzHZa5) → Emoji Yüklersiniz .

> [g.nuke](https://discord.gg/MgmuBzHZa5) → Kanala Nuke Atar .

> [g.istatistik](https://discord.gg/MgmuBzHZa5) → Botun İstatistiklerine Bakarsınız .

**• Bilgilendirme**

> ✅ **Discord Js Sürümü : 12.5.0**

> ✅ **Yapımcım : <@598974473374400512>**

> ✅ **Sürümüm : 2.0.1**

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
