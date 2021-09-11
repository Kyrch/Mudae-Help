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
})

client.login(token)