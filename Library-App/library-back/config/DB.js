var mongoose = require('mongoose');
require('dotenv').config();
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
    console.log('MongoDB succesfully connected....');

})