const irc = require('irc');

const config = {
    server: 'irc.example.com', // IRC sunucu
    port: 6667,
    nick: 'TomBot',
    channels: ['#kanal'],
};

const client = new irc.Client(config.server, config.nick, {
    channels: config.channels,
    port: config.port,
});

client.on('registered', () => {
    console.log(`Bot ${config.nick} sunucuya bağlandı!`);
});

client.on('error', (message) => {
    console.error('Hata:', message);
});

client.on('message', (from, to, message) => {
    console.log(`${from} => ${to}: ${message}`);
    if (message.toLowerCase() === 'merhaba') {
        client.say(to, `Selam ${from}, ben TomBot!`);
    }
});
