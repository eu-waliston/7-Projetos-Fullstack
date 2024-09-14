const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require("../Model/Editors.Model");
const Book = require("../Model/Books.Model");

async function getAEditor(req, res) {
  try {
    let editor = Editors.find({});
    res.status(200).json(editor);
  } catch (e) {
    res.status(500).sernd({ message: e });
  }
}
async function getAllEditors(req, res) {
  let id = req.params.id;
  try {
    let editors = Editors.findOne(id);
    res.status(200).json(editors);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
async function createEditor(req, res) {
  let book = await Book.find();

  const newEditor = {
    name: req.body.name,
    location: req.body.location,
    website: req.body.website,
    book_id: book._id,
  };
  try {
    let newEditor = await Editors.save();
    res.status(200).json(newEditor);
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
async function updateEditor(req, res) {
    let book = await Book.find();
    try {
        const editorUpdated = await Book.uopdateOne(
          { id: req.params._id },
          {
            $set: {
                name: req.body.name,
                location: req.body.location,
                website: req.body.website,
                book_id: book._id,
            },
          }
        );
        res.status(200).json(editorUpdated);
      } catch (e) {
        res.status(500).send({ message: e });
      }
}
async function deleteEditor(req, res) {
    let _id = req.params.id;
    try {
      await Editor.findByIdAndDelete(_id);
      res.status(200).send("Editor Deletado!!!");
    } catch (e) {
      res.status(500).send({ message: e });
    }
}

module.exports = {
  getAEditor,
  getAllEditors,
  createEditor,
  updateEditor,
  deleteEditor,
};
