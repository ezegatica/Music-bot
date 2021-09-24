const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`El tiempo indicado se sale del tema actual ${message.author}... intenta denuevo ? ❌`);

        await queue.seek(timeToMS);

        message.channel.send(`Yendo al tiempo **${ms(timeToMS, { long: true })}** ✅`);
    },
};