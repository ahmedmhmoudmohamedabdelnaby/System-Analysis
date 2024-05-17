const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const cartRouter = require('./routes/cart-router');

const app = express();
const apiPort = 5003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', cartRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));