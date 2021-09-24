module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Tema ${queue.current.title} pausado ✅` : `Algo salio mal ${message.author}... intentá denuevo ? ❌`);
    },
};