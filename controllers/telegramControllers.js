import TelegramBot from 'node-telegram-bot-api';
import generatePromoCode from '../miscellanous/promoGenerate.js';


export const initTelegramBot = () => {
    const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

    // Handle /start command
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const userName = msg.from.first_name || 'User';
        bot.sendMessage(chatId, `Hello, ${userName}! Welcome to the bot!`);
    });

    //handle /help comman
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;
        const helpMessage = `
Available Commands:
/start - Greet and welcome to the bot
/help - Show this help message
    `;
        bot.sendMessage(chatId, helpMessage.trim());
    });

      // Handle /promo command
  bot.onText(/\/promo/, (msg) => {
    const chatId = msg.chat.id;
    const promoCode = generatePromoCode();
    bot.sendMessage(chatId, `Your unique promo code is: ${promoCode}`);
  });

    // Log any errors
    bot.on('polling_error', (error) => {
        console.error('Polling error:', error);
    });
};