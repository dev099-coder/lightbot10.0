let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  for (let id of groups) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n' + readMore + '• _*AVISO DO PROPRIETÁRIO DO LIGHTBOT*_ •')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_Enviar mensagens de transmissão Do ${groups.length} grupo_`, m)
}
handler.help = ['transmitirgp','bcgp'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(transmitirgp|bc)(group|grup|gp)$/i
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

