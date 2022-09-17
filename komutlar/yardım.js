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
.setTitle("Mavera Çekiliş Giveaway")
.setThumbnail('https://media.discordapp.net/attachments/1012351091096178829/1016819881288671365/9181779763a1ae54d1fe1266fa0d391d.png?width=346&height=346')
.setImage("https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402")
.setDescription(`
**<a:586273537677983774:1012334694907531356> prefix:** *m!*
**<:45:1007979694131515482> Sahib:** <@631165648520609823>
**<:onays:1016686884098932807> m!oyver** *Yapıp Bize Destek Olabilirsiniz*

**.başlat** : Çekiliş Başlatırsınız..

**.bitir** : Çekilişi Bitirirsiniz.

**.edit** : Çekilişi Düzenlersiniz.

**.reroll** : Çekilişteki Kazananları Tekrar Çekersiniz.

**.sil** : Çekilişi Silersiniz.

• Genel Komutlar •

**.istatistik** : Botun İstatiklerini Görüntülersiniz.

**.ping** : Botun Gecikme Süresini Görüntülersiniz.

**<a:583021641747923145:1012336321471189014> Bağlantılar**
**[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=893238888179580958&scope=bot&permissions=805314622)**
**[Destek Sunucusu](https://discord.gg/ZyQWrgKg66)**
**[Uptime Ekle](https://discord.gg/3Y88f3kyJe)**
`)

   

    .setImage(

      ""

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
