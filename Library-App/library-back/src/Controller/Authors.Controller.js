const express = require("express");
const Author = require("../Model/Authors.Model");
const Book = require("../Model/Books.Model");

async function getAllAuthors(req, res) {
  try {
    const allAuthors = await Author.find();
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

async function getAnAuthor(res, res) {
  let id = req.params.id;
  try {
    let author = await Author.findOne(id);
    res.status(200).json(author);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

async function createAuthor(req, res) {
  let book = await Book.find();
  const newAuthor = new Author({
    name: req.body.name,
    bio: req.body.bio,
    nationality: req.body.nationality,
    birthdate: req.body.birthdate,
    books: book._id,
  });

  try {
    let author = await newAuthor.save();
    res.status(200).json(author);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

async function updateAuthor(req, res) {
  let book = await Book.find();

  try {
    const updateAuthor = await Author.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          bio: req.body.bio,
          nationality: req.body.nationality,
          birthdate: req.body.birthdate,
          books: book._id,
        },
      }
    );

    res.status(200).json(updateAuthor);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}

async function deleteAuthor(req,res) {
    let id = req.params.id;
    try {
        await Author.findByIdAndDelete(id);
        res.status(200).json("Author Deletado")
    } catch (e) {
        res.stauts(500).send({message: e})
    }
}

module.exports = {
    getAllAuthors,
    getAnAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}
