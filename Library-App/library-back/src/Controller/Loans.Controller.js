const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");
const Loans = require("../Model/Loans.Model")

async function getALoans(req,res) {}
async function getAllLoans(req,res){}
async function createLoans(req,res){}
async function updateLoans(req,res){}
async function deleteLoans(req,res){}

module.exports = {
    getALoans,
    getAllLoans,
    createLoans,
    updateLoans,
    deleteLoans
}