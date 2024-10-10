module.exports = (client) => {
    const channelId = process.env.CHANNEL_ID
    
    const updateMembers = guild =>
    {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Yangho: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get(process.env.CHANNEL_ID)
    updateMembers(guild)
}
