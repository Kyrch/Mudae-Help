const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = (Discord, client) => {
    console.log('Bot ready!')
    client.user.setStatus('online');
    client.user.setPresence({
        activity: {
            name: 'k.help',
            type: "PLAYING",
            url: "https://twitter.com/Kyrchzera"
        },
    });
}