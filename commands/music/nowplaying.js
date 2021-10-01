const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'temon'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['deshabilitada', 'track', 'queue'];

        const progress = queue.createProgressBar();

        embed.setDescription(`Progreso **${progress}**\nRepetición **${methods[queue.repeatMode]}**\nVolumen **${queue.volume}**%\nSolicitado por ${track.requestedBy}`);
        
        embed.setTimestamp();
        embed.setFooter('Made with heart by Zerio, traducito por Gati ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};