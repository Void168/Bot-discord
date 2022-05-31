const momentTimezone = require('moment-timezone')
const { MessageCollector } = require('discord.js')

const scheduledSchema = require('../models/scheduled-schema')

module.exports = {
    requirePermission: ['ADMINISTRATOR'],
    expectedArgs: '<Channel tag  <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    minArgs: 5,
    maxArgs: 5,
    init: (client) =>
    { 
        const checkForPosts = async () =>
        {
            const query = {
                date: {
                    $lte: Date.now()
                }
            }

            const results = await scheduledSchema.find(query)

            for (const post of results) {
                const { guildId, channelId, content } = post

                const guild = await client.guilds.fetch(guildId)
                if (!guild) {
                    continue
                }

                const channel = guild.channels.cache.get(channelId)
                if (!channel) {
                    continue
                }

                channel.send(content)
            }

            await scheduledSchema.deleteMany(query)

            setTimeout(checkForPosts, 1000*10)
        }
    },
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
            message.reply(`Phải chọn AM hoặc PM, bạn đã chọn  "${ clockType }"`)
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
                message.reply('Đã quá thời gian gửi gắm')
            }

            message.reply('Lời nhắn của bạn đã được cài đặt')

            await new scheduledSchema({
                date: targetDate.valueOf(),
                content: collectedMessage.content,
                guildId: guild.id,
                channelId: targetChannel.id
            }).save()
        })
    } 
}