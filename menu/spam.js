const a = '```'
const spam = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *𝐌𝐄𝐍𝐔 ${name}* 」
┴
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎:${a} *${pushname2}*
┣⊱  ${a}𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:${a} *${groupName}*
┣⊱  ${a}𝐕𝐄𝐑𝐒𝐈𝐎𝐍:${a} *0.0.0*
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *𝐒𝐏𝐀𝐌𝐌𝐄𝐑 𝐌𝐄𝐍𝐔* 」
┴
┠≽ *${prefix} jack09reyes@gmail.com*
┠≽ *${prefix}https://www.instagram.com/jack_paymon/?hl=es*
┬
╰────────────────────────
`
}
exports.spam = spam