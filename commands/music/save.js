module.exports = {
    name: 'save',
    aliases: ['temazo'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        message.author.send(`Guardando el tema ${queue.current.title} | ${queue.current.author} en el servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Te envie el nombre del tema por privado ✅`);
        }).catch(error => {
            message.channel.send(`No te pude enviar un mensaje privado ${message.author}... intentá denuevo ? ❌`);
        });
    },
};