module.exports = {
    name: 'skip',
    aliases: ['s'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Tema ${queue.current.title} salteado ✅` : `Algo salió mal ${message.author}... intenta denuevo ? ❌`);
    },
};