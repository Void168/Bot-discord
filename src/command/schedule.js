const momentTimezone = require('moment-timezone')
const { MessageCollector} = require('discord.js')

module.exports = {
    requirePermission: ['ADMINISTRATOR'],
    expectedArgs: '<Channel tag  <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    minArgs: 5,
    maxArgs: 5,
    init: () => { },
    callbacks: async ({ message, args }) =>
    {
        const {mentions, guild, channel} = message
        const targetChannel = metions.channels.first()
        if (!targetChannel) {
            message.reply('Chọn channel mà bạn muốn gửi tin nhắn!')
            return
        }

        //Bỏ channel tag khỏi args array
        args.shift()

        const [date, time, clockType, timeZone] = args

        if (clockType !== "AM" && clockType !== "PM") {
            message.reply("Phải chọn AM hoặc PM, bạn đã chọn "${ clockType })
            return
        }

        const validTimeZones = momentTimezone.tz.names()
        if (!validTimeZones.includes(timeZone)) {
            message.reply("Thời gian không xác định")
            return
        }
        const targetDate = momentTimezone.tz(`${date} ${time} ${clockType}`, 'YYYY-MM_DD HH:mm A', timeZone)
        message.reply('Bạn muốn gửi gắm gì?')

        const filter = (newMess) =>
        {
            return newMess.author.id === message.author.id
        }

        const collector = new MessageCollector(channel, filter, {
            max: 1,
            time: 1000*60
        })

        collector.on('end', async (collected) =>
        {
            const collectedMessage = collected.first()

            if (!collectedMessage) {
                message.reply('Lời nhắn của bạn đã được cài đặt')
            }
        })
    } 
}