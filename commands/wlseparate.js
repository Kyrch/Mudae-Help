module.exports = {
    name: 'wlseparate',
    description: 'Pega a lista de $wl e separa em "$"',
    aliases: ['wlsep'],
    execute(client, message, args) {

        const {
            member
        } = message

        const animes = Array.from(args.slice(0).join(' '))
        let nowAnimesHere = []
        animes.forEach((item, indice, array) => {
            nowAnimesHere += item.replace("\n", "$").replace(/_/gi, " ")
        })
        message.channel.send(nowAnimesHere)
    }
}