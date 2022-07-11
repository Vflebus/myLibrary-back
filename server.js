const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()
const router = require('./router');
const port = process.env.PORT || 4000;

// Connexion à la BDD
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('connected to database'));

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/', router)

app.listen(port, () => console.log(`logged on port ${port}`));