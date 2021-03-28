const a = '```'
const menupremium = (prefix, pushname2, groupName, user, name, premium, premi) => {
return `
╭─────≽「 *𝐌𝐄𝐍𝐔 ${name}* 」
┴
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎:${a} *${pushname2}*
┣⊱  ${a}𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:${a} *${groupName}*
┣⊱  ${a}𝐕𝐄𝐑𝐒𝐈𝐎𝐍:${a} *0.0.0*
┣⊱  ${a}𝐒𝐢 𝐎 𝐍𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌:${a} *${premi}*
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎:${a} *${user.length} User*
┬
╰────────────────────────

╭───────≽「 *𝐏𝐑𝐄𝐌𝐈𝐔𝐍* 」
┴
┠≽ *${prefix}playmp3 menepi*
┠≽ *${prefix}fb link video*
┠≽ *${prefix}snack link snack video*
┠≽ *${prefix}ytmp3 link yt*
┠≽ *${prefix}ytmp4 link yt*
┠≽ *${prefix}tiktok link video tiktok*
┠≽ *${prefix}joox Monolog Pamungkas*
┠≽ *${prefix}smule Link Video Smule*
┬
╰────────────────────────
`
}
exports.menupremium = menupremium