const ms = require("ms");
const Discord = require("discord.js");
const num = require("num-parse");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.inlineReply(
      "> <a:yanlss:1008733112592769024> **Sen çekiliş yapamazsın. `Sunucuyu Yönet` yetkisine sahip değilsin!**"
    );
  if (!args[0]) {
    return message.inlineReply("> <a:yanlss:1008733112592769024> **Geçerli bir mesaj** *ID'si* **belirtmelisiniz!**");
  }

  let giveaway =
    client.giveawaysManager.giveaways.find(g => g.prize === args.join(" ")) ||
    client.giveawaysManager.giveaways.find(g => g.messageID === args[0]);

  if (!giveaway) {
    return message.channel.send(
      "`" + args.join(" ") + "` için bir hediye bulamıyorum."
    );
  }

  client.giveawaysManager
    .reroll(giveaway.messageID)
    .then(() => {
    })
    .catch(e => {
      if (
        e.startsWith(
          `${giveaway.messageID} ID'ye sahip çekiliş daha sona ermedi.`
        )
      ) {
        message.channel.send("Bu hediye bitmedi!");
      } else {
        console.error(e);
        message.channel.send("Bir hata oluştu...");
      }
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "reroll"
};
