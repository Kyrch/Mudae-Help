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

    if (message.content.includes(`bom dia`)) {
        message.channel.send(`ohayo onii-chan`)
    }

    if (message.content.includes(`o que o felp é?`)) {
        message.channel.send(`o felp é gay, onii-chan`)
    }

    // if (message.author.id == '221689867032199168') {
    //     message.channel.send(`vc me engravidou hikki https://i.imgur.com/624jGro.png`)
    // }
})

client.login(token)