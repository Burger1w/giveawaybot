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
.setTitle("Mavera Çekiliş Giveaway")
.setThumbnail('https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402')
.setImage("https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402")
.setDescription(`
**<a:586273537677983774:1012334694907531356> prefix:** *m!*
**<:45:1007979694131515482> Sahib:** <@847596022020309013>
**<:onays:1016686884098932807> m!vote** *Komutunu Kullanıp Bize Destek Olabilirsiniz*

**Çekiliş Komutları**
<:thumbnail:1020668547208331274> **m!başlat** - *Çekilişi Başlatır.*
<:thumbnail:1020668547208331274> **m!bitir** - *Çekilişi Sonlandırır.*
<:thumbnail:1020668547208331274> **m!reroll** - *Yeni Kazanan Kişiyi Tekrar Seçer.*
<:thumbnail:1020668547208331274> **m!edit** - *Çekilişi Düzenler.*
<:thumbnail:1020668547208331274> **m!sil** - *Çekilişi Siler.*

**Genel Komutlar**
<:1009095264398753822:1012341965884489831> **m!ping** - *Botun Ping Verisini Gösterir.*
<a:583014055443169301:1012334678126112850> **m!istatistik** - *Bot İstatistik Verileri.*

**<a:583021641747923145:1012336321471189014> Bağlantılar**
[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=893238888179580958&scope=bot&permissions=805314622)
[Destek Sunucusu](https://discord.gg/ZyQWrgKg66)
[Uptime Ekle](https://discord.gg/3Y88f3kyJe)
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
