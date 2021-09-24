module.exports = {
    name: 'shuffle',
    aliases: ['random'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay ningún tema despues de este ${message.author}... intentá denuevo ? ❌`);

        await queue.shuffle();

        return message.channel.send(`Randomizando **${queue.tracks.length}** canción(es) ! ✅`);
    },
};