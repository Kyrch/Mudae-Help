module.exports = {
    name: 'help',
    description: 'Mostra a lista de comandos',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const config = require('../config.json');

        const {
            member
        } = message

        const prefix = config.prefix;
        const user = message.author;
        const avatar = user.avatarURL({
            dynamic: true,
            format: "png",
            size: 1024
        });

        const avatarBot = 'https://i.imgur.com/bHlwO5Y.png'
        const footer = '© Mudae Help'

        if (args.length == 0) {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('LISTA DE COMANDOS')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Comando Help',
                    value: `${prefix}help <comando>`
                }, {
                    name: 'Comandos',
                    value: 'separate'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
        }

        if (args[0] == 'separate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO SEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}separate <texto de várias linhas>`
                }, {
                    name: 'Aliase',
                    value: `${prefix}sep`
                }, {
                    name: 'Função',
                    value: 'Troca os espaços de linha por "$"'
                }, {
                    name: 'Permissões Necessárias',
                    value: 'Nenhuma'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
        }

        if (args[0] == 'topseparate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO TOPSEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}topseparate <texto do top>`
                }, {
                    name: 'Aliases',
                    value: `${prefix}ts`
                }, {
                    name: 'Função',
                    value: 'Pega a lista apenas os personagens de $top e os separa por "$"'
                }, {
                    name: 'Permissões Necessárias',
                    value: 'Nenhuma'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
        }
    }
}