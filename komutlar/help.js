const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Bilal = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Kardeşler Çekiliş 🎉")
    .setDescription(
      `**Selam ${message.author.username}**
**Benim Komutlarım Bunlardır;**`
    )
    .setFooter(".d");
  message.inlineReply(Bilal);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"]
};

module.exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
