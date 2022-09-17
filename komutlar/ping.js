const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  const Crewembed = new Discord.MessageEmbed()
  .setTitle("**Pingim**")
  .setColor("#6767e0")
  .setDescription(`> <:1009095264398753822:1012341965884489831> | ${client.ws.ping} *Ms*`)
  message.channel.send(Crewembed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 