const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");

async function getABok(req,res) {}
async function getAllBooks(req,res){}
async function createBook(req,res){}
async function updateBoook(req,res){}
async function deleteBook(req,res){}

module.exports = {
    getABok,
    getAllBooks,
    createBook,
    updateBoook,
    deleteBook
}

