module.exports = {
    name: 'dlseparate',
    description: 'Separa a lista $dl em $',
    aliases: ['dlsep'],
    execute(client, message, args) {

        const {
            member
        } = message

        const animes = args.slice(0).join(' ')

        let quantity = []
        const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
        var animesSemHeart = animes.replace(RegExpEmoji, '').replace(/\n/g, '')
        var corte = animesSemHeart.split(/[{)(}]/)

        if (animes.split('(')[0] !== undefined) {
            quantity += animesSemHeart.split('(', 1)[0]
        }

        if (animes.split(')')[1] !== undefined) {
            quantity += "$" + corte[2]
        }

        if (animes.split('(')[3] !== undefined) {
            quantity += "$" + corte[4]
        }

        if (animes.split(')')[3] !== undefined) {
            quantity += "$" + corte[6]
        }

        if (animes.split('(')[5] !== undefined) {
            quantity += "$" + corte[8]
        }

        if (animes.split(')')[5] !== undefined) {
            quantity += "$" + corte[10]
        }

        if (animes.split('(')[7] !== undefined) {
            quantity += "$" + corte[12]
        }

        if (animes.split(')')[7] !== undefined) {
            quantity += "$" + corte[14]
        }

        if (animes.split('(')[9] !== undefined) {
            quantity += "$" + corte[16]
        }

        if (animes.split(')')[9] !== undefined) {
            quantity += "$" + corte[18]
        }

        if (animes.split('(')[11] !== undefined) {
            quantity += "$" + corte[20]
        }

        if (animes.split(')')[11] !== undefined) {
            quantity += "$" + corte[22]
        }

        if (animes.split('(')[13] !== undefined) { 
            quantity += "$" + corte[24]
        }

        if (animes.split(')')[13] !== undefined) {
            quantity += "$" + corte[26]
        }

        if (animes.split('(')[15] !== undefined) { 
            quantity += "$" + corte[28]
        }

        if (animes.split(')')[15] !== undefined) {
            quantity += "$" + corte[30]
        }

        if (animes.split('(')[17] !== undefined) { 
            quantity += "$" + corte[32]
        }

        if (animes.split(')')[17] !== undefined) {
            quantity += "$" + corte[34]
        }

        if (animes.split('(')[19] !== undefined) { 
            quantity += "$" + corte[36]
        }

        if (animes.split(')')[19] !== undefined) {
            quantity += "$" + corte[38]
        }

        if (animes.split('(')[21] !== undefined) { 
            quantity += "$" + corte[40]
        }

        if (animes.split(')')[21] !== undefined) {
            quantity += "$" + corte[42]
        }

        if (animes.split('(')[23] !== undefined) { 
            quantity += "$" + corte[44]
        }

        if (animes.split(')')[23] !== undefined) {
            quantity += "$" + corte[46]
        }

        if (animes.split('(')[25] !== undefined) { 
            quantity += "$" + corte[48]
        }

        if (animes.split(')')[25] !== undefined) {
            quantity += "$" + corte[50]
        }

        if (animes.split('(')[27] !== undefined) { 
            quantity += "$" + corte[52]
        }

        if (animes.split(')')[27] !== undefined) {
            quantity += "$" + corte[54]
        }

        if (animes.split('(')[29] !== undefined) { 
            quantity += "$" + corte[56]
        }

        if (animes.split(')')[29] !== undefined) {
            quantity += "$" + corte[58]
        }

        if (animes.split('(')[31] !== undefined) { 
            quantity += "$" + corte[60]
        }

        if (animes.split(')')[31] !== undefined) {
            quantity += "$" + corte[62]
        }

        if (animes.split('(')[33] !== undefined) { 
            quantity += "$" + corte[64]
        }

        if (animes.split(')')[33] !== undefined) {
            quantity += "$" + corte[66]
        }

        if (animes.split('(')[35] !== undefined) { 
            quantity += "$" + corte[68]
        }

        if (animes.split(')')[35] !== undefined) {
            quantity += "$" + corte[70]
        }

        if (animes.split('(')[35] !== undefined) { 
            quantity += "$" + corte[72]
        }

        if (animes.split(')')[35] !== undefined) {
            quantity += "$" + corte[74]
        }

        if (animes.split('(')[37] !== undefined) { 
            quantity += "$" + corte[76]
        }

        if (animes.split(')')[37] !== undefined) {
            quantity += "$" + corte[78]
        }

        if (animes.split('(')[39] !== undefined) { 
            quantity += "$" + corte[80]
        }

        if (animes.split(')')[39] !== undefined) {
            quantity += "$" + corte[82]
        }

        if (animes.split('(')[41] !== undefined) { 
            quantity += "$" + corte[84]
        }

        if (animes.split(')')[41] !== undefined) {
            quantity += "$" + corte[86]
        }

        if (animes.split('(')[43] !== undefined) { 
            quantity += "$" + corte[88]
        }

        if (animes.split(')')[43] !== undefined) {
            quantity += "$" + corte[90]
        }

        message.channel.send(quantity)
    }
}