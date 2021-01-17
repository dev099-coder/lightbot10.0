let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = true
  m.reply('Feito!')
}
handler.help = ['banirchat']
handler.tags = ['owner']
handler.command = /^banirchat/i
handler.owner = true

module.exports = handler
