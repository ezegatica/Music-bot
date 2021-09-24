player.on('error', (queue, error) => {
    console.log(`Error emitido desde la fila ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitido desde la conexión ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`Reproduciendo ${track.title} en **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Tema ${track.title} añadido a la fila ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui expulsado del canal de voz, limpiando fila... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('No hay nadie en el canal de voz, nos vemos!... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Ya termine toda la fila de reproducción ✅');
});