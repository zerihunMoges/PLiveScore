require('dotenv').config()
const token = process.env.BOTTOKEN

const { Telegraf } = require('telegraf')
const link = 'https://venerable-youtiao-6ebbe5.netlify.app'
const bot = new Telegraf(token)
bot.start((ctx) => {
  console.log(ctx.message)
  ctx.reply('Click the button below to use Premier League Live Score Bot', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Pl Live', web_app: { url: link } }]]
    }
  })
})

bot.launch()
