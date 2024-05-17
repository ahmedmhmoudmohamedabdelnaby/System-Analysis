const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const noteRouter = require('./routes/note-router');

const app = express();
const apiPort = 5005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', noteRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));