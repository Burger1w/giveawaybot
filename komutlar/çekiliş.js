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

.setColor("#6767e0")
.setTitle("Mlickle Yardım Menüsü")
.setThumbnail('https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402')
.setImage("https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402")
.setDescription(`
**<:slash:1017880313172594740> Prefix:** *m!*
**<:mavi_tac2:1017876004557049957> Sahib:** FR | Uykucuk ♆#1851

**Çekiliş Komutları**
<:hediyekutusu:1018260326904508598> **m!başlat** - *Çekilişi Başlatır.*
<:hediyekutusu:1018260326904508598> **m!bitir** - *Çekilişi Sonlandırır.*
<:hediyekutusu:1018260326904508598> **m!reroll** - *Yeni Kazanan Kişiyi Tekrar Seçer.*
<:hediyekutusu:1018260326904508598> **m!edit** - *Çekilişi Düzenler.*
<:hediyekutusu:1018260326904508598> **m!sil** - *Çekilişi Siler.*
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

    name: 'çekiliş', 

    description: 'Botun Komut Listesini Gösterir!',

    usage: '.yardım'

};
