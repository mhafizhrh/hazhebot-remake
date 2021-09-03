module.exports = async (message) => {
    try {
        if (message.hasQuotedMsg) {
            const quotedMsg = await message.getQuotedMessage()
            if (quotedMsg.hasMedia) {
                const media = await quotedMsg.downloadMedia()
                return {
                    media: media,
                    options: {
                        sendMediaAsSticker: true
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
                const media = await message.downloadMedia()
                return {
                    media: media,
                    options: {
                        sendMediaAsSticker: true
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
        console.log('RANDPIC Error : ', error)
        return {
            error: true,
            message: `Maaf, terjadi kesalahan sistem. \nSertakan media atau reply/balas pesan yang berisi media (media berupa dokumen tidak akan terbaca). \nSilahkan coba lagi nanti.`
        }
    }
}