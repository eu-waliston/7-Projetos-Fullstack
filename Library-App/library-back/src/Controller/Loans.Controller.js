const express = require("express");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");
const Loans = require("../Model/Loans.Model");
const User = require("../Model/User.Model");
const Loan = require("../Model/Loans.Model");

async function getALoan(req,res) {
    let _id = req.params.id
    try {
        let loan = Loans.findOne(_id);
        res.status(200).json(loan);
    } catch(e) {
        res.status(500).send({message: e})
    }
}
async function getAllLoans(req,res){
    try {
        let loans = Loans.find({});
        res.status(200).json(loans)
    } catch (error) {
        res.status(500).send({message: error})
    }
}
async function createLoans(req,res){
    let book = await Book.find();
    let user = await User.find();

    const newLoan = new Loan({
        user_id: user._id,
        book_id: book._id,
        due_dat: req.params.due_dat,
        return_date: req.pparams.return_date,
        fine: req.params.fine
    })

    try {
        let loan = await newLoan.save();
        res.status(200).json(loan)
    } catch (e) {
        res.status(500).send({message: e})
    }
}
async function updateLoans(req,res){
    let book = await Book.find();
    let user = await User.find();
    try {
        const updatedLoan = await Loan.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    user_id: user._id,
                    book_id: book._id,
                    due_dat: req.params.due_dat,
                    return_date: req.pparams.return_date,
                    fine: req.params.fine
                }
            }
        )

        res.tatus(200).json("Emprestimo  Atualizado: " + "\n" + updatedLoan)
    } catch (error) {
        res.status(500).send({message: error})
    }

}
async function deleteLoans(req,res){
    let id = req.params.id;

    try {
        await Loans.findByIdAndDelete(id);
        res.status(200).json("Loan Delected!!")
    } catch (error) {
        res.tatus(500),send({message: error})
    }
}

module.exports = {
    getALoan,
    getAllLoans,
    createLoans,
    updateLoans,
    deleteLoans
}