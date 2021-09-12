module.exports = {
    name: 'mmseparate',
    description: 'Separa a lista de $mm em "$" e retira apenas os emojis',
    aliases: ['mmsep'],
    execute(client, message, args) {

        const {
            member
        } = message

        const animes = Array.from(args.slice(0).join(' '))

        let quantity = []
        const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g

        animes.forEach((item, indice, array) => {
            quantity += item.replace('|', '').replace(RegExpEmoji, '').replace('\n', '$')
        })

        message.channel.send(quantity)
    }
}