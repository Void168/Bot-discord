module.exports = (client) =>
{
    const channelId = '941555019264716843'
    const targetChannelId= '980991505151975445'
    client.on('guildMemberAdd', (member) =>
    {
        console.log(member)
        const message = `Chào yangho <@${member.id}> tới với Mì Arena nhóe! Hãy vào kênh ${member.guild.channels.cache.get(targetChannelId).toString()} để xưng danh`
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}