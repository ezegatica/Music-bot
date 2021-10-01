module.exports = {
    name: 'progreso',
    aliases: ['tema'],
    utilisation: '{prefix}progreso',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);
        const track = queue.current;

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Reproduciendo un video en vivo, no hay informacion disponible 🎧`);
        message.channel.send(`${track.title}\n${progress}`);
    },
};