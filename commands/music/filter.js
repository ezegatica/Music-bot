module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay musica reproduciendose actualmente ${message.author}... intentá denuevo ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Por favor especifique un filtro valido a deshabilitar o habilitar ${message.author}... intentá denuevo ? ❌\n${actualFilter ? `Filtro actualmente activo: ${actualFilter} (**${client.config.app.px}filter ${actualFilter}** para deshabilitarlo).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Este filtro no existe ${message.author}... intentá denuevo ? ❌\n${actualFilter ? `Filtro actualmente activo ${actualFilter}.\n` : ''}Lista de filtros disponibles: ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`El filtro ${filter} ha sido **${queue.getFiltersEnabled().includes(filter) ? 'activado' : 'desactivado'}** ✅`);
    },
};