const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed..."));

db.once('open', () => {
    
})