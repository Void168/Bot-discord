module.exports = (client, aliases, callback) =>
{
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    client.on('createMessage', (message) =>
    {
        const { content } = message
        
        aliases.forEach(alias =>
        {
            const command = `${process.env.PREFIX}${alias}`

            if (content.startsWith(`${command}`) || content === command) {
                console.log(`Running the command ${command}`)
                callback(message)
            } 
        })
    })
}