module.exports = async (message) => {
    try {
        if (message.hasQuotedMsg) {
            const quotedMsg = await message.getQuotedMessage()
            if (quotedMsg.hasMedia) {
                console.log(`dari quoted msg`)
                media = await quotedMsg.downloadMedia()
                return {
                    media: media
                }
            } else {
                return {
                    error: true,
                    message: `Tolong sertakan media!`
                }
            }
        } else {
            if (message.hasMedia) {
                console.log(`dari media`)
                media = await message.downloadMedia()
                return {
                    media: media
                }
            } else {
                return {
                    error: true,
                    message: `Tolong sertakan media!`
                }
            }
        }
    } catch (error) {
        return {
            error: true,
            message: `Fitur sedang bermasalah, coba kembali setelah beberapa saat`
        }
    }
}