const Discord = require('discord.js')
const fs = require('fs');
const {
    config
} = require('process');
const client = new Discord.Client()

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => require(`./handlers/${handler}`)(client, Discord))
const {
    token
} = require('./config.json')

client.on("message", (message) => {
    // const args = message.content.split(' ');
    // if (message.channel.type == "dm") {
    //     if (!message.content.startsWith(config.prefix)) {
    //         if (args.length == 1) {
    //             const channelNick = client.channels.cache.find(channel => channel.id === "852847894930259988");
    //             const autor = `<@!${message.author.id}>`
    //             channelNick.send(`${autor} // ${message.author.id} // ${message}`)
    //         }
    //     }
    // }
})

client.login(token)