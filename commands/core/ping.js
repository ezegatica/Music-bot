const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ultimo ping calculado hace ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} segundos, **${client.ws.ping}ms** 🛰️`);
    },
};