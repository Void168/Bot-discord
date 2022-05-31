module.exports = (client) =>
{
    const channelId = '980991505151975445'
    const targetChannelId= '941555019264716844'
    client.on('guildMemberAdd', (member) =>
    {
        const message = `Chào yangho <@${member.id}> tới với Mì Arena nhóe! Hãy vào kênh ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()} để xưng danh`
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}