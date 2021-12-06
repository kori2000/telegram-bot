const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')

// Loading Bot Settings
dotenv.config()

const API_TOKEN = process.env.API_TOKEN
const MASTER_ID = process.env.MASTER_ID

const bot = new TelegramBot(API_TOKEN, {polling: true})

// Listen on specific KEY TEXT (in this case 'echo'), and send back
bot.onText(/\/echo (.+)/, (msg, match) => {    
    // Sender Phone ID
    const chatId = msg.chat.id
    // Received Messages
    const response = match[1]
    // Send back fetched message
    bot.sendMessage(chatId, `Echo : ${response}`)
})

// Listen for any kind of message.
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'Hi, received your message...')
})

function sendToMaster(msg) {
    bot.sendMessage(MASTER_ID, msg)
}

module.exports = { 
    bot,
    sendToMaster
}