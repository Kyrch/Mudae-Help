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
                    value: 'mmseparate' + '\n' + 'separate' + '\n' + 'topseparate'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
            return
        }

        const cmd = args[0].toLowerCase()

        if (cmd == 'mmseparate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO MMSEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}mmseparate <texto de $mm apenas com emoji>`
                }, {
                    name: 'Aliases',
                    value: `${prefix}mmsep`
                }, {
                    name: 'Função',
                    value: 'Separa a lista de $mm em "$" e retira apenas os emojis'
                }, {
                    name: 'Permissões Necessárias',
                    value: 'Nenhuma'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
        }

        if (cmd == 'separate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO SEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}separate <texto de várias linhas>`
                }, {
                    name: 'Aliases',
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

        if (cmd == 'topseparate') {
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