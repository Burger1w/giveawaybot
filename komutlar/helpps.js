const { EmbedBuilder, PermissionsBitField  } = require("discord.js");

exports.run = async (client, message, args) => {

   const embed = new EmbedBuilder()
   .setColor("#6767e0")
   .setTitle(`Mavera Help`)
   .setThumbnail('https://media.discordapp.net/attachments/1012351091096178829/1016819881288671365/9181779763a1ae54d1fe1266fa0d391d.png?width=346&height=346')
   .setImage("https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=402&height=402")
   .setDescription(`
**<a:586273537677983774:1012334694907531356> prefix:** *m!*
**<:45:1007979694131515482> Sahib:** <@631165648520609823>
**<:onays:1016686884098932807> m!oyver** *Yapıp Bize Destek Olabilirsiniz*

*<:1013240160709791854:1016839108255043584> m!buton-rol* - **Belirlediğiniz Rolü Butonlu Şekilde Verir.**
*<:1013240160709791854:1016839108255043584> m!emojiler* - **Sunucudaki Emojileri Listeler.**
*<:1013240160709791854:1016839108255043584> m!ping* - **Bot Pingini Gösterir.**
*<:1013240160709791854:1016839108255043584> m!ban* - **Üyeyi Sunucudan Banlar.**
*<:1013240160709791854:1016839108255043584> m!kick* - **Üyeyi Sunucudan Atar.**
*<:1013240160709791854:1016839108255043584> m!afk* - **Afk Moduna Girmenizi Sağlar.**
*<:1013240160709791854:1016839108255043584> m!snake* - **Yılan Oyunu Oynarsınız.**
*<:1013240160709791854:1016839108255043584> m!sunucu-bilgi* - **Sunucu Hakkında Bilgileri Listeler.**
*<:1013240160709791854:1016839108255043584> m!sil* - **Belirtilen Miktarda Mesaj Siler.**
*<:1013240160709791854:1016839108255043584> m!say* - **Sunucudaki Üyeler Hakkında Bilgi Verir.**
*<:1013240160709791854:1016839108255043584> m!istatistik* - **Botun Güncel İstatistiklerini Gösterir.**
*<:1013240160709791854:1016839108255043584> m!öneri-log* - **Öneri Atılacak Kanalı Ayarlar.**
*<:1013240160709791854:1016839108255043584> m!öner* - **Sunucu Hakkında Öneri Yaparsınız.**
*<:1013240160709791854:1016839108255043584> m!menülü-rol* - **Menülü Rol Alma Sistemi.**
*<:1013240160709791854:1016839108255043584> m!ticket-log* - **Ticket Açınca Kapatınca Log Atar.**
*<:1013240160709791854:1016839108255043584> m!ticket-yetkilisi* - **Ticket Yetkilisini Ayarlar.**
*<:1013240160709791854:1016839108255043584> m!ticket-oluştur* - **İstediğin Kanalda Ticket Kurar.**
*<:1013240160709791854:1016839108255043584> m!abone-rol* - **Verilecek Abone Rolünü Ayarlar.**
*<:1013240160709791854:1016839108255043584> m!abone-yetkilisi* - **Komutu Kullanacak Yetkiliyi Ayarlar.**
*<:1013240160709791854:1016839108255043584> m!abone* - **Etiketlenen Kullanıcıya Abone Rolü Verir.**

**<a:583021641747923145:1012336321471189014> Bağlantılar**
**[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=893238888179580958&scope=bot&permissions=805314622)**
**[Destek Sunucusu](https://discord.gg/ZyQWrgKg66)**
**[Uptime Ekle](https://discord.gg/3Y88f3kyJe)**
`) 
   .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
   .setTimestamp()  

   return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "helpss"
};