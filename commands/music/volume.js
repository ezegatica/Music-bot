const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: [],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`El volumen actual es de ${queue.volume} 🔊\n*Para cambiar el volumen, por favor ingrese un numero valido entre **1** y **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`El volumen ingresado es igual al actual ${message.author}... intentá denuevo con otro valor ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`El numero ingresado es invalido. Ingrese un numero valido entre  **1** y **${maxVol}** ${message.author}... intentá denuevo ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `El volumen ha sido modificado a **${vol}**/**${maxVol}**% 🔊` : `Algo salio mal ${message.author}... intentá denuevo ? ❌`);
    },
};