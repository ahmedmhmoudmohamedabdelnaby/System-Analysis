const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 6002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! - from nodejs random number service');
})

app.get('/api/number', (req, res) => {
    const randomItems = [
        "Fantastic service !",
        "Amazing experience, highly recommend!",
        "friendly team.",
        "Excellent value for money!",
        "Impressed by the quality, will return!",
        "Good vibes, great work!",

    ];
    function randomIntFromInterval() {
        return randomItems[Math.floor(Math.random() * randomItems.length)];    }

    let rndInt = randomIntFromInterval();
    return res.status(200).json({
        success: true,
        value: `${rndInt}`
    });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
