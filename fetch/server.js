const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/coingecko_markets.json', async (req, res) => {
    try {
        const response = await fetch('https://fanated.com/coingecko_markets.json');
        const data = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        res.json(data);
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при получении данных' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
