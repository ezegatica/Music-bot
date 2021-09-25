const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const express = require('express');
const app = express();
app.listen(80);
app.all('*', function (req, res) {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=702882808422727761&permissions=3206224&scope=bot")
});
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);