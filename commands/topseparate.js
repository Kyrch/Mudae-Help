module.exports = {
    name: 'topsseparate',
    description: 'Pega a lista apenas os personagens de $top e os separa por "$"',
    aliases: ['ts'],
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

        const animes = args.slice(0).join(' ')

        let quantity = []
        const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
        var animesSemHeart = animes.replace(RegExpEmoji, '')

        if (animes.split(' - ')[1] !== undefined) {
            quantity += animesSemHeart.split(' - ')[1]
        }

        if (animes.split(' - ')[3] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[3]
        }

        if (animes.split(' - ')[5] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[5]
        }

        if (animes.split(' - ')[7] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[7]
        }

        if (animes.split(' - ')[9] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[9]
        }

        if (animes.split(' - ')[11] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[11]
        }

        if (animes.split(' - ')[13] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[13]
        }

        if (animes.split(' - ')[15] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[15]
        }

        if (animes.split(' - ')[17] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[17]
        }

        if (animes.split(' - ')[19] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[19]
        }

        if (animes.split(' - ')[21] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[21]
        }

        if (animes.split(' - ')[23] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[23]
        }

        if (animes.split(' - ')[25] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[25]
        }

        if (animes.split(' - ')[27] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[27]
        }

        if (animes.split(' - ')[29] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[29]
        }

        if (animes.split(' - ')[31] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[31]
        }

        if (animes.split(' - ')[33] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[33]
        }

        if (animes.split(' - ')[35] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[35]
        }

        if (animes.split(' - ')[37] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[37]
        }

        if (animes.split(' - ')[39] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[39]
        }

        if (animes.split(' - ')[41] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[41]
        }

        if (animes.split(' - ')[43] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[43]
        }

        if (animes.split(' - ')[45] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[45]
        }

        if (animes.split(' - ')[47] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[47]
        }

        if (animes.split(' - ')[49] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[49]
        }

        if (animes.split(' - ')[51] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[51]
        }

        if (animes.split(' - ')[53] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[53]
        }

        if (animes.split(' - ')[55] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[55]
        }

        if (animes.split(' - ')[57] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[57]
        }

        if (animes.split(' - ')[59] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[59]
        }

        if (animes.split(' - ')[61] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[61]
        }

        if (animes.split(' - ')[63] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[63]
        }

        if (animes.split(' - ')[65] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[65]
        }

        if (animes.split(' - ')[67] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[67]
        }

        if (animes.split(' - ')[69] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[69]
        }

        if (animes.split(' - ')[71] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[71]
        }

        if (animes.split(' - ')[73] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[73]
        }

        if (animes.split(' - ')[75] !== undefined) {
            quantity += "$" + animesSemHeart.split(' - ')[75]
        }

        message.channel.send(quantity)
        console.log(`${messageConsole}, Executado em ${message.guild.name}, ID: ${message.guild.id}`)
    }
}