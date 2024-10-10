module.exports = (client) =>
{
    const channelId = process.env.CHANNEL_ID
    const targetChannelId= process.env.TARGET_CHANNEL_ID
    client.on('guildMemberAdd', (member) =>
    {
        console.log(member)
        const message = `Chào yangho <@${member.id}> tới với Mì Arena nhóe! Hãy vào kênh ${member.guild.channels.cache.get(targetChannelId).toString()} để xưng danh`
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
