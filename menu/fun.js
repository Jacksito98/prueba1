const a = '```'
const fun = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *𝐌𝐄𝐍𝐔${name}* 」
┴
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎:${a} *${pushname2}*
┣⊱  ${a}𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:${a} *${groupName}*
┣⊱  ${a}𝐕𝐄𝐑𝐒𝐈𝐎𝐍:${a} *0.0.0*
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *𝐉𝐔𝐆𝐀𝐑 𝐂𝐎𝐍 𝐓𝐔𝐒 𝐀𝐌𝐈𝐆𝐎𝐒* 」
┴
┠≽ *${prefix}truth*
┠≽ *${prefix}dare*
┠≽ *${prefix}readmore*
┠≽ *${prefix}puisiimg*
┠≽ *${prefix}asupan*
┠≽ *${prefix}tebakgambar*
┠≽ *${prefix}caklontong*
┠≽ *${prefix}family100*
┠≽ *${prefix}meme*
┠≽ *${prefix}memeindo*
┠≽ *${prefix}darkjokes*
┠≽ *${prefix}kalkulator 13*12*
┬
╰────────────────────────
`
}
exports.fun = fun