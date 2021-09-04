module.exports = async (message) => {
    try {
        if (message.hasQuotedMsg) {
            const quotedMsg = await message.getQuotedMessage()
            if (quotedMsg.hasMedia) {
                media = await message.downloadMedia()
                return {
                    media: media,
                    options: {
                        sendVideoAsGif: true
                    }
                }
            } else {
                return {
                    error: true,
                    message: `Tolong sertakan media!`
                }
            }
        } else {
            if (message.hasMedia) {
                media = await message.downloadMedia()
                return {
                    media: media,
                    options: {
                        sendVideoAsGif: true
                    }
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