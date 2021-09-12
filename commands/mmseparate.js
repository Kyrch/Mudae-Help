module.exports = {
    name: 'mmseparate',
    description: 'Separa a lista de $mm em "$" e retira apenas os emojis',
    aliases: ['mmsep'],
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

        let quantity = []
        const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g

        animes.forEach((item, indice, array) => {
            quantity += item.replace('|', '').replace(RegExpEmoji, '').replace('\n', '$')
        })

        message.channel.send(quantity)
        console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
    }
}