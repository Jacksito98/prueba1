const a = '```'
const encrypt = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *𝐌𝐄𝐍𝐔 ${name}* 」
┴
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎:${a} *${pushname2}*
┣⊱  ${a}𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:${a} *${groupName}*
┣⊱  ${a}𝐕𝐄𝐑𝐒𝐈𝐎𝐍:${a} *0.0.0*
┣⊱  ${a}𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *𝐄𝐍𝐂𝐑𝐘𝐏𝐓 & 𝐃𝐄𝐂𝐑𝐘𝐏𝐓* 」
┴
┠≽ *${prefix}encode64 string*
┠≽ *${prefix}decode64 encrypt*
┠≽ *${prefix}hexaencode string*
┠≽ *${prefix}hexadecode encrypt*
┠≽ *${prefix}encbinary string*
┠≽ *${prefix}decbinary encrypt*
┠≽ *${prefix}encoctal string*
┠≽ *${prefix}decoctal encrypt*
┠≽ *${prefix}dorking dork*
┠≽ *${prefix}whois Domain*
┠≽ *${prefix}hostsearch Domain*
┠≽ *${prefix}dnslookup IP/Domain*
┠≽ *${prefix}geoip IP*
┠≽ *${prefix}nping IP*
┠≽ *${prefix}pastebin teks*
┠≽ *${prefix}tinyurl link*
┠≽ *${prefix}bitly link*
┠≽ *${prefix}hashidentifier Encrypt Hash*
┬
╰────────────────────────
`
}
exports.encrypt = encrypt