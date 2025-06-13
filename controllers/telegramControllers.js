import TelegramBot from 'node-telegram-bot-api';
import generatePromoCode from '../miscellanous/promoGenerate.js';


export const initTelegramBot = () => {
    const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    const DiscordLink = process.env.DISCORD_LINK || 'https://discord.gg/Wy8D8WBuKu';

    // Handle /start command
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const userName = msg.from.first_name || 'there';

        const welcomeMessage = `
👋 Hello, ${userName}!

Welcome to **Tech Nest Bot** — your gateway to exclusive tech classes and community support.

🔹 Use /promo to get your **unique promo code**
🔹 Use /discord to join our **Discord server**
🔹 Need help? Type /help for available commands

Let’s get started! 🚀
    `;

        bot.sendMessage(chatId, welcomeMessage.trim(), { parse_mode: "Markdown" });
    });

    // help command
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;

        const helpMessage = `
🛠 **Help Menu - Tech Nest Bot**

Here are the commands you can use:

📌 /start – Start your journey with the bot  
🎁 /promo – Generate your unique promo code  
🔗 /discord – Get the invite link to our Discord server  
❓ /help – View this help message again

Need assistance? Just send a message here and we’ll try to help! 💬
    `;

        bot.sendMessage(chatId, helpMessage.trim(), { parse_mode: "Markdown" });
    });

    // Handle /promo command
    bot.onText(/\/promo/, (msg) => {
        const chatId = msg.chat.id;
        const promoCode = generatePromoCode();
        bot.sendMessage(chatId, `🎉 Welcome to Tech Nest Bot! 🎉

Your unique promo code is: ${promoCode}

📋 **How to use your code:**
1. Join our Discord server ${DiscordLink}
2. Find a teacher/admin in the Discord server
3. Share your promo code with them for verification
4. Once verified, you'll get access to classes!

🔗 Need help? Use /help command for more information.`);
    });

    // Discord Link `/discord` - Get Discord server invite link
    bot.onText(/\/discord/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, `🔗 Discord Server Invite Link: ${DiscordLink}`);
    })

    // Log any errors
    bot.on('polling_error', (error) => {
        console.error('Polling error:', error);
    });
};