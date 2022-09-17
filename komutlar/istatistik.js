const moment = require('moment')
require('moment-duration-format');
const os = require('os');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const dizi = []
        client.guilds.cache.find((item, i) => {
            dizi.push(item.memberCount)
        })
        var toplam = 0
        for (var i = 0; i < dizi.length; i++) {
            if (isNaN(dizi[i])) {
                continue;
            }

            toplam += Number(dizi[i])
        }
        const uptime = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")

        const embed = new Discord.MessageEmbed()
            .setTitle('İstatistik')
            .setColor("#6767e0")
            .setThumbnail("https://media.discordapp.net/attachments/1012351091096178829/1020666747780608062/thumbnail.png?width=410&height=410")
            .addField('<a:586273537677983774:1012334694907531356> Kullanıcı Sayısı', toplam, true)
            .addField('<:993209155676541078:1012341487180206120> Sunucu Sayısı', client.guilds.cache.size, true)
            .addField('<a:673546393725435952:1012334730206785596> Kanal Sayısı', client.channels.cache.size, true)
            .addField('<:timeout:1018637770283036752> Çalışma Süresi', uptime, true)
            .addField('<:993209157828219010:1012341464765845575> Node.JS Versiyon', process.version, true)
            .addField('<:993209157828219010:1012341464765845575> Ram Kullanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0), true)
            .addField('<:993209157828219010:1012341464765845575> CPU', `\`\`\`${os.cpus().map(i => i.model)[0]}\`\`\``)
            .addField('<:993209157828219010:1012341464765845575> Bit', os.arch(), true)

        message.channel.send(embed)
};

exports.conf = {
    aliases: ["i"]
};

exports.help = {
    name: 'istatistik',
    description: 'İstatistik',
    usage: 'İstatistik'
};