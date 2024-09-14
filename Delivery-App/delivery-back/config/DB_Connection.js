const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = process.env.DB_URL;

mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

db.once("once", () => {
  console.log("Connected to MongoDB");
});
