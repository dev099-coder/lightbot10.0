let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
let limit = 30
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (args.length < 1) return reply('Cade o Url?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
if (anu.error) return reply(anu.error)
teks = `*Título* : ${anu.title}`
thumb = await getBuffer(anu.thumb)
client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', nome do arquivo: `${anu.title}.mp4`, quoted: mek})
}
handler.help = ['mp4','a'].map(v => 'yt' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt(a|mp4)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler