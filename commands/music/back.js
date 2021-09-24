module.exports = {
    name: 'back',
    aliases: ['anterior', 'atras'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`No hay tema anterior ${message.author}... intentá denuevo ? ❌`);

        await queue.back();

        message.channel.send(`Reproduciendo el tema **anterior** ✅`);
    },
};