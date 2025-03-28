const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const telegramBot = require('node-telegram-bot-api');
const gamepushSDK = require('gamepush-sdk');
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.json());

// Настройки Telegram Bot
const bot = new telegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот для регистрации.');
});

// Настройки Gamepush SDK
const gamepush = new gamepushSDK(process.env.GAMEPUSH_API_KEY);

// Маршрут для регистрации
app.post('/api/register', (req, res) => {
    const { fullName, country, city, birthday, language } = req.body;

    // Отправка уведомления через Telegram
    bot.sendMessage(process.env.CHAT_ID, `Новая регистрация: ${fullName}, ${country}, ${city}`);

    // Отправка пуш-уведомления через Gamepush SDK
    gamepush.sendNotification({ title: 'Новая регистрация', message: `${fullName} зарегистрировался из ${city}` });

    res.status(200).json({ message: 'Регистрация выполнена!' });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});