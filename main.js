const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const express = require('express');
const app = express();
const cluster = require('cluster');

if (cluster.isMaster) {
    console.info("Cantidad de cores: " + require('os').cpus().length);
    // console.log(`Server corriendo en el puerto ${app.get('port')}`)
    console.log(`Maestro ${process.pid} corriendo!`);
    for (let i = 0; i < 1; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.error(`Worker ${worker.process.pid} fucking died :(`);
        cluster.fork();
    });
} else {
    console.log(`Worker ${cluster.worker.process.pid} levantado`);
    app.listen(80);

    app.get("/ping", function (req, res) {
        return res.json("pong!");
    });

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
}