module.exports = {
    name: 'separate',
    description: 'Separar Anti Disable List do Mudae',
    aliases: ['sep'],
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