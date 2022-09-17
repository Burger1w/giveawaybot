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
.setTitle("Giveaway Oy Ver")
.setThumbnail('https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402')
.setDescription(`**Botumuza Oy Vermek İçin [Buraya](https://top.gg/bot/893238888179580958/vote) Tıklayarak Oy Verebilirsiniz, Not: Verenler Candır.**`)
.setFooter("Mavera Oy Ver")
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

    name: 'vote', 

    description: 'Botun Komut Listesini Gösterir!',

    usage: 'm!oyver'

};
