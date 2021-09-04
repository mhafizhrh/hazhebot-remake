const {
    Client
} = require('whatsapp-web.js')

const qrcode = require('qrcode-terminal')
const ffmpeg = require('ffmpeg-cli')
const commands = require('./commands')

const client = new Client({
    puppeteer: {
        executablePath: '/opt/google/chrome/google-chrome',
        args: ['--no-sandbox']
    },
    ffmpegPath: ffmpeg.path
})

client.on('qr', qr => {
    // function createQR() {
    qrcode.generate(qr, {
        small: true
    })
    // }
    // setTimeout(createQR, 3000)
})

client.on('authenticated', () => {
    console.log('Authenticated.')
})

client.on('ready', () => {
    console.log('Bot ready.')
})

client.on('message', async (msg) => {
    if (msg.body == '!ping') {
        msg.reply('Pong')
    }
    commands(msg, client)
})

client.initialize()