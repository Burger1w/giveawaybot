const Discord = require("discord.js");
const fs = require("fs");
const Ayarlar = require("./ayarlar.json");
const Client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });
require("moment-duration-format");
require("./komut.js")(bot);
require("./events.js")(bot);
require("./yanıtlama");

const newUsers = new Discord.Collection();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

module.exports = {
  bot: bot,
  Discord: Discord
};

bot.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === Ayarlar.sahip) permlvl = 4;
  return permlvl;
};
bot.on("ready", () => {
  console.log(
    "│ TÜM KODLAR YÜKLENDİ KULLANILMAYA HAZIR!                      │"
  );
  console.log(
    "│ LAREX 💖 Çekiliş!                                      │"
  );
  console.log(
    "└──────────────────────────────────────────────────────────────┘"
  );
  bot.user.setActivity(`.yardım | .i`, { type: "PLAYING", status: "dnd" });
});

bot.login(process.env.token);

bot.on("ready", () => {
bot.channels.cache.get("").join();
});
