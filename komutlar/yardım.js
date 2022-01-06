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

**[Destek Sunucusu](https://discord.gg/j9yX22xYsJ)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=928163266084077628&scope=bot&permissions=8)** **•** **[Web-Site]()**

Bir komut hakkında detaylı __yardım için__: **.yardım**
**• Komutlar**

> [.başlat](https://discord.gg/j9yX22xYsJ) → Çekiliş Başlatırsınız..

> [.sil](https://discord.gg/j9yX22xYsJ) → Çekilişi İptal Edersiniz.

> [.edit](https://discord.gg/https://discord.gg/j9yX22xYsJ) → çeklişi editlersiniz.

> [.bitir](https://discord.gg/j9yX22xYsJ) → Çekilişi Bitirmeye Yarar.

> [.sesgir](https://discord.gg/j9yX22xYsJ) → Botu Ses Kanalına .

> [.ey / .emojiyükle](https://discord.gg/j9yX22xYsJ) → Emoji Yüklersiniz .

> [.nuke](https://discord.gg/j9yX22xYsJ) → Kanala Nuke Atar .

> [.istatistik](https://discord.gg/j9yX22xYsJ) → Botun İstatistiklerine Bakarsınız .

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
