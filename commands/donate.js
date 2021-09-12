module.exports = {
    name: 'donate',
    description: 'Mandar donate ao proprietário do bot',
    execute(client, message) {

        const {
            member
        } = message

        const messageConsole = `${message.author.username}#${message.author.discriminator}`

        if (message.channel.type !== "dm") {
            if (member.guild.me.hasPermission('ADMINISTRATOR') || member.guild.me.hasPermission('SEND_MESSAGES') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES')) {
                if (member.guild.me.hasPermission('ADMINISTRATOR') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES') !== false) {
                    message.channel.send("Donate ao proprietário: https://app.picpay.com/user/kyrch")
                    if (member.guild.me.hasPermission('ADMINISTRATOR') || member.guild.me.hasPermission('ATTACH_FILES') || message.guild.me.permissionsIn(message.channel).has('ATTACH_FILES')) {
                        if (member.guild.me.hasPermission('ADMINISTRATOR') || message.guild.me.permissionsIn(message.channel).has('ATTACH_FILES') !== false) {
                            message.channel.send("https://i.imgur.com/CyPRWOn.png")
                        } else {
                            console.log(`${messageConsole} // ATTACH_FILES foi negado ao canal. Sem ADMINISTRATOR`)
                        }
                    } else {
                        console.log(`${messageConsole} // ATTACH_FILES não está habilitado ao cargo nem ao canal. Sem ADMINISTRATOR`)
                    }
                } else {
                    console.log(`${messageConsole} // SEND_MESSAGES foi negado ao canal. Sem ADMINISTRATOR`)
                }
            } else {
                console.log(`${messageConsole} // SEND_MESSAGES não está habilitado ao cargo nem ao canal. Sem ADMINISTRATOR`)
            }
        } else {
            message.channel.send("Donate ao proprietário: https://app.picpay.com/user/kyrch" + "\n" + "https://i.imgur.com/CyPRWOn.png")
            console.log(`Comando DM: ${messageConsole}`)
        }
    }
}