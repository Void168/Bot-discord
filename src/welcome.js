module.exports = (client) =>
{
    const channelId = '980991505151975445'
    const targetChannel= '941555019264716844'
    client.on('guildMemberAdd', (member) =>
    {
        const message = `Chào yangho <@${member.id}> tới với Mì Arena nhóe! Hãy vào kênh ${member.guild.channels.cache
            .get(targetChannel)
            .toString()}`
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}