const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quit")
        .setDescription("Displays info about the currently playing song"),
    run: async ({ client, interaction }) =>
    {
        const queue = client.player.getQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There are no song in the queue")
        
        let bar = queue.createProgressBar({
            queue: false,
            leangth: 19
        })
        await interaction.editReply({
            embeds: [new MessageEmbed()
                .setThumbnail(song.thumbnail)
                .setDescription(`Currently playing [${song.title}](${song.url}) \n\n` + bar)]
        })
    }
}