const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");
const User = require("../Model/User.Model");

async function getAUser(req,res) {}
async function getAllUsers(req,res){}
async function createUser(req,res){}
async function updateUser(req,res){}
async function deleteUser(req,res){}

module.exports = {
    getAUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}