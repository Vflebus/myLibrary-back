const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const router = require('./router');


mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

app.use(express.json());
app.use('/', router)

app.listen(3000, () => console.log('logged'));