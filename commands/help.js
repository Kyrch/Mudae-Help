module.exports = {
    name: 'help',
    description: 'Mostra a lista de comandos',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const config = require('../config.json');

        const {
            member
        } = message

        const messageConsole = `${message.author.username}#${message.author.discriminator} - ${message}`

        if (message.channel.type !== "dm") {
            if (!(member.guild.me.hasPermission('ADMINISTRATOR') || member.guild.me.hasPermission('SEND_MESSAGES') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES'))) {
                console.log(`${messageConsole} // SEND_MESSAGES não está habilitado ao cargo nem ao canal. Sem ADMINISTRATOR`)
                return
            }
            if (!(member.guild.me.hasPermission('ADMINISTRATOR') || member.guild.me.hasPermission('EMBED_LINKS') || message.guild.me.permissionsIn(message.channel).has('EMBED_LINKS'))) {
                console.log(`${messageConsole} // EMBED_LINKS não está habilitado ao cargo nem ao canal. Sem ADMINISTRATOR`)
                return
            }
        } else {
            console.log(`Comando DM: ${messageConsole}`)
        }

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
                    value: 'dlseparate' + '\n' + 'mmseparate' + '\n' + 'topseparate' + '\n' + 'wlseparate'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)


            message.channel.send(embed)
            console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
            return
        }

        const cmd = args[0].toLowerCase()

        if (cmd == 'dlseparate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO DLSEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}dlseparate <texto de $dl>`
                }, {
                    name: 'Aliases',
                    value: `${prefix}dlsep`
                }, {
                    name: 'Função',
                    value: 'Separa a lista de $dl em "$"'
                }, {
                    name: 'Permissões Necessárias',
                    value: 'Nenhuma'
                })
                .setTimestamp()
                .setFooter(footer, avatarBot)

            message.channel.send(embed)
            console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
        }

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
            console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
        }

        if (cmd == 'wlseparate') {
            const embed = new Discord.MessageEmbed()
                .setColor('#d3e6e6')
                .setTitle('COMANDO WLSEPARATE')
                .setAuthor(`${user.username}#${user.discriminator}`, avatar)
                .setThumbnail(avatarBot)
                .addFields({
                    name: 'Sintaxe',
                    value: `${prefix}wlseparate <texto de $wl>`
                }, {
                    name: 'Aliases',
                    value: `${prefix}wlsep`
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
            console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
        }
    }
}