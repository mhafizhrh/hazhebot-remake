const {
    Client
} = require('whatsapp-web.js')

const qrcode = require('qrcode-terminal')
const ffmpeg = require('ffmpeg-cli')
const commands = require('./commands')

const client = new Client({
    puppeteer: {
        executablePath: '/opt/google/chrome/google-chrome'
    },
    ffmpegPath: ffmpeg.path
})

client.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    })
})

client.on('authenticated', () => {
    console.log('Authenticated.')
})

client.on('ready', () => {
    console.log('Bot ready.')
})

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('Pong')
    }
    commands(msg, client)
})

client.initialize()