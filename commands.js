const handler = require('./handler')
module.exports = async (msg, client) => {
    switch (msg.body) {
        case '!sticker':
            response = await handler.sticker(msg)
            if (response.error) {
                client.sendMessage(msg.from, response.message)
            } else {
                client.sendMessage(msg.from, response.media, response.options)
            }
            break
        case '!video2gif':
            response = await handler.video2gif(msg)
            if (response.error) {
                client.sendMessage(msg.from, response.message)
            } else {
                client.sendMessage(msg.from, response.media, response.options)
            }
            break
        case '!sticker2img':
            client.sendMessage(msg.from, `*Note: this feature does not support gif stickers and will be sent as images*`)
            response = await handler.sticker2img(msg)
            if (response.error) {
                client.sendMessage(msg.from, response.message)
            } else {
                client.sendMessage(msg.from, response.media)
            }
            break
    }
}