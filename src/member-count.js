module.exports = (client) => {
    const channelId = '981821801527128114'
    
    const updateMembers = guild =>
    {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Yangho: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('941555019264716841')
    updateMembers(guild)
}