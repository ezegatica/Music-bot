module.exports = {
    name: 'stop',
    aliases: ['dc', 'fuckoff', 'tomatela'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        queue.destroy();

        message.channel.send(`Deteniendo musica, hasta la proxima ✅`);
    },
};