module.exports = {
    name: 'wlseparate',
    description: 'Pega a lista de $wl e separa em "$"',
    aliases: ['wlsep'],
    execute(client, message, args) {

        const {
            member
        } = message

        const messageConsole = `${message.author.username}#${message.author.discriminator} - ${message}`

        if (message.channel.type !== "dm") {
            if (!(member.guild.me.hasPermission('ADMINISTRATOR') || member.guild.me.hasPermission('SEND_MESSAGES') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES'))) {
                if (member.guild.me.hasPermission('ADMINISTRATOR') || message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES') !== false) {
                    console.log(`${messageConsole} // SEND_MESSAGES não está habilitado ao cargo nem ao canal. Sem ADMINISTRATOR`)
                    return
                }
            }
        } else {
            console.log(`Comando DM: ${messageConsole}`)
        }

        const animes = Array.from(args.slice(0).join(' '))
        let nowAnimesHere = []
        animes.forEach((item, indice, array) => {
            nowAnimesHere += item.replace("\n", "$").replace(/_/gi, " ")
        })
        message.channel.send(nowAnimesHere)
        console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
    }
}