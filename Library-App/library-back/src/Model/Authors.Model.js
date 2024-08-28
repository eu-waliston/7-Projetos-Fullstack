const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    typer: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
    unique: true,
  },
  birthdate: {
    type: Date,
    required: true,
    unique: true,
  },
  books: {
    type: [Schema.ObjectId],
    ref: "Book",
    required: true,
  },
});

//create a model
const Author = mongoose.model("Author", authorsSchema);

//export the model
module.exports = Author;
