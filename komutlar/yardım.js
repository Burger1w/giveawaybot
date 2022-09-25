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

**Komutlar**
<:hediyekutusu:1018260326904508598> **m!çekiliş** - *Çekilişi Başlatır.*

**Genel Komutlar**
<:1009095264398753822:1012341965884489831> **m!ping** - *Botun Ping Verisini Gösterir.*
<a:583014055443169301:1012334678126112850> **m!istatistik** - *Bot İstatistik Verileri.*
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

    name: 'help', 

    description: 'Botun Komut Listesini Gösterir!',

    usage: '.yardım'

};
