const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require("../Model/Editors.Model");
const Book = require("../Model/Books.Model");

async function getABok(req, res) {
  let _id = req.params.id;
  try {
    let book = Book.findOne(_id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
async function getAllBooks(req, res) {
  try {
    let allbooks = Book.find({});
    res.status(200).json(allbooks);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
async function createBook(req, res) {
  let author = Author.find();
  let publisher = Editors.find();

  const newBook = new Book({
    title: req.body.title,
    author: author._id,
    isbn: req.body.isbn,
    publisher: publisher._id,
    year: req.body.year,
    genre: req.body.genre,
    copies: req.body.copies,
    sumary: req.body.sumary,
    location: req.body.location,
    status: req.body.status,
  });

  try {
    let newbook = await newBook.save();
    res.status(200).json(newbook);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
async function updateBoook(req, res) {
  let author = Author.find();
  let publisher = Editors.find();

  try {
    const bookUpdated = await Book.uopdateOne(
      { id: req.params._id },
      {
        $set: {
          title: req.body.title,
          author: author._id,
          isbn: req.body.isbn,
          publisher: publisher._id,
          year: req.body.year,
          genre: req.body.genre,
          copies: req.body.copies,
          sumary: req.body.sumary,
          location: req.body.location,
          status: req.body.status,
        },
      }
    );
    res.status(200).json(bookUpdated);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

async function deleteBook(req, res) {
  let _id = req.params.id;
  try {
    await Book.findByIdAndDelete(_id);
    res.status(200).send("Livro Deletado!!!");
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

module.exports = {
  getABok,
  getAllBooks,
  createBook,
  updateBoook,
  deleteBook,
};
