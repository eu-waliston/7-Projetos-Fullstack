const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");

async function getAEditor(req,res) {}
async function getAllEditors(req,res){}
async function createEditor(req,res){}
async function updateEditor(req,res){}
async function deleteEditor(req,res){}

module.exports = {
    getAEditor,
    getAllEditors,
    createEditor,
    updateEditor,
    deleteEditor
}
