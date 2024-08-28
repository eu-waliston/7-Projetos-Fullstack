const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Define the schema
const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type:[ Schema.ObjectId],
    ref: "Author",
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  publisher: {
    type: Schema.ObjectId,
    ref: "Publisher",
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  copies: {
    type: Number,
    required: true,
  },
  sumary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    unique: true,
  },
});

//create a model
const Book = mongoose.model("Book", booksSchema);

//export the model
module.exports = Book;
