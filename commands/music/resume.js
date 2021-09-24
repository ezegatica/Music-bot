module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Tema ${queue.current.title} resumido ✅` : `Algo salio mal ${message.author}... intentá denuevo ? ❌`);
    },
};