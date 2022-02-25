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

.setColor("RANDOM")

.setTitle("  » Erasty Giveaway  ")

.setThumbnail("")

.setDescription(

`**.başlat** : Çekiliş Başlatırsınız..

**.bitir** : Çekilişi Bitirirsiniz.

**.edit** : Çekilişi Düzenlersiniz.

**.reroll** : Çekilişteki Kazananları Tekrar Çekersiniz.

**.sil** : Çekilişi Silersiniz.

• Genel Komutlar •

**.istatistik** : Botun İstatiklerini Görüntülersiniz.

**.ping** : Botun Gecikme Süresini Görüntülersiniz.

 

`

)

   

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

    name: 'yardım', 

    description: 'Botun Komut Listesini Gösterir!',

    usage: '.yardım'

};
