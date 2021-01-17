let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.array.filter(v => !v.read_only && v.message).map(v => v.jid)
  for (let id of chats) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n' + readMore + '• _*AVISO DO PROPRIETÁRIO DO LIGHTBOT 👑✨*_ •')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_Enviar mensagem difundir Do ${chats.length} bate-papo_`, m)
}
handler.help = ['transmitir','bc'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(transmitir|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

