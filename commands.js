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
    }
}