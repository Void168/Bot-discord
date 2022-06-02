require("dotenv").config();

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const WOKCommands = require('wokcommands')
const path = require('path')
const welcome = require('./welcome')
const command = require('./command')
const config = require('./config.json')
const memberCount = require('./member-count')

client.on('ready', () =>
{
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        showWarns: false,
        mongoUri: process.env.mongoPath
    })

    console.log(`${client.user.tag} đang bay tới đây. Víuuuuu`)

    welcome(client)

    command(client, 'help', (message) =>
    {
        message.channel.send(`
            Nhìn xuống bàn phím đi, gõ mấy cái này nè:
            *help - Show help menu
        `)
    })

    command(client, 'in4', (message) =>
    {
        const exampleEmbed = new MessageEmbed()
            .setColor('#4752C4')
            .setTitle('Welcome to Livestream của Egg Mì')
            .setURL('https://www.nimo.tv/user/684138458')
            .setAuthor({ name: '[Egg] Mì', iconURL: 'https://img.nimo.tv/t/1599518054884/202203171647542428136_1599518054884_avatar.png/w240_l0/img.webp', url: 'https://www.nimo.tv/user/684138458' })
            .setDescription('Chú hề ở mọi vũ trụ')
            .setThumbnail('https://img.nimo.tv/t/1629511985499/202205211653168769119_1629511985499_avatar.png/w180_l0/img.webp')
            .addFields(
                { name: 'Nimo ID:', value: '684138458' },
                { name: '\u200B', value: '\u200B' },
                { name: 'FaceBook', value: 'https://www.facebook.com/miiduyennn', inline: true },
                { name: 'Instagram', value: 'https://www.instagram.com/migerme/', inline: true },
                { name: 'Tiktok', value: 'https://www.tiktok.com/@migerme', inline: true },
            )
            .setImage('https://img.nimo.tv/t/1599518054884/202203171647542428136_1599518054884_avatar.png/w240_l0/img.webp')
            .setTimestamp()
            .setFooter({ text: 'Nimo Show', iconURL: 'https://img.nimo.tv/t/1599518054884/202203171647542428136_1599518054884_avatar.png/w240_l0/img.webp' });

        message.channel.send({ embeds: [exampleEmbed] });
    })

    memberCount(client)
})

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("AI của Mì đang bay tới đây. Víuuuuu ✈️")
})

client.on('messageCreate', (message) =>
{

    console.log(`${message.content}`);
    if (message.content.toLowerCase().includes('mì ơi') || message.content.toLowerCase().includes('mi oi')) {
        message.react('😊');
        message.reply('Mì đây, gọi gì đó???')
    }   
    if (message.content.toLowerCase().includes('mì dễ thương')   || message.content.toLowerCase().includes('mi de thuong') ||
        message.content.toLocaleLowerCase().includes('mì cute')  || message.content.toLowerCase().includes('mi cute') ||
        message.content.toLocaleLowerCase().includes('mì xinh đẹp')  || message.content.toLowerCase().includes('mi xinh dep')){
        message.react('🥰');
        message.react('😘');
        message.reply('Hoi hoi hoi, đừng khen tuiiii. Mà tiếp đi, hí hí')
    }

    if (message.content.toLowerCase().includes('mì tệ') || message.content.toLowerCase().includes('mi te')) {
        message.react('😡');
        message.react('🤬');
        message.reply('🔫🔫🔫🔫🔫')
    }
    if (message.content.includes("=))")) {
        message.reply('Cười giề')
    }
    if (message.content.toLowerCase().includes("hoàng dũng") || message.content.toLowerCase().includes("hoang dung")) {
        message.react('😽');
        message.reply('Em không là làng thơơơơớ')
    }
    if (message.content.toLowerCase().includes('mèo ơi') || message.content.toLowerCase().includes('meo oi')) {
        message.react('🐠');
        message.reply('Meowwww~~~ 🐱🐱🐱')
    }  
    if (message.content.toLowerCase().includes('zalo')) {
        message.reply('https://zalo.me/g/yludud360')
    }
    if (message.content.toLowerCase().includes('ai cute nhat') || message.content.toLowerCase().includes('ai cute nhất')) {
        message.react('🤩');
        message.reply('Mì cute đóoooo 🐱🐱🐱')
    } 
})
client.login(process.env.DISCORDJS_BOT_TOKEN);
