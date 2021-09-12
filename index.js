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

client.on("guildCreate", guild => {
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id}). Número de Membros: ${guild.memberCount} membros!`);

});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id}). Número de Membros: ${guild.memberCount} membros!`);
});

client.on("message", (message) => {})

client.login(token)