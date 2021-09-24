const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['repetir'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Primero tenes que deshabilitar el modo de loopeo en la musica actual (${client.config.app.px}loop) ${message.author}... intentá denuevo ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo repetición **${queue.repeatMode === 0 ? 'deshabilitado' : 'habilitado'}** la fila completa será repetida sin fin 🔁` : `Algo salio mal ${message.author}... intentá denuevo ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Primero tenes que deshabilitar el modo de loopeo en la musica actual (${client.config.app.px}loop queue) ${message.author}... intentá denuevo ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo repetición **${queue.repeatMode === 0 ? 'deshabilitado' : 'habilitado'}** El tema actual será repetido sin fin 🔁 (podes loopear la fila completa con la opción !loop <queue>) 🔂` : `Algo salio mal ${message.author}... intentá denuevo ? ❌`);
        };
    },
};