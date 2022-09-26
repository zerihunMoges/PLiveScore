const token = '5473312446:AAGO_rKT1lnA-jH0EbV-pSJdRc-NJKMSL8g'

const { Telegraf } = require('telegraf')
const link = 'https://spontaneous-meringue-8b8f1c.netlify.app'
const bot = new Telegraf(token)
bot.start((ctx) =>
  ctx.reply('Welcome', {
    reply_markup: { keyboard: [[{ text: 'Pl Live', web_app: { url: link } }]] }
  })
)

bot.launch()
