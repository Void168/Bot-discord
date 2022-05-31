require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const welcome = require('./welcome')

client.on('ready', () =>
{
    console.log(`${client.user.tag} đang bay tới đây. Víuuuuu`)

    welcome(client)
})

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("AI của Mì đang bay tới đây. Víuuuuu ✈️")
})

client.on('message', (message) =>
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

    if (message.content.toLowerCase().includes("bằng") || message.content.includes("==") || message.content.toLowerCase().includes("bang")) {
        message.react('🔪');
        message.react('🪓');
        message.react('🔫');
        message.react('🪚');
        message.reply('Tao bắn mày đó!!!')
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
    if (message.content.toLowerCase().includes('boss')) {
        message.react('🤩');
        message.reply('Cô chủ Mì 🐱🐱🐱')
    } 
    if (message.content.toLowerCase().includes('nhân viên tệ') || (message.content.toLowerCase().includes('nhan vien te'))){
        message.react('😔');
        message.reply('Hưng xấu xa 😔')
    } 
})
client.login(process.env.DISCORDJS_BOT_TOKEN);
