const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Bilal = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setDescription(`**Pingim : \`${client.ws.ping}\`**`)

    .setFooter("Code By Bilal Ömer");
  message.inlineReply(Bilal);
};

module.exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["Gecikme"]
};

module.exports.help = {
  name: "ping",

  description: "",

  usage: ""
};
