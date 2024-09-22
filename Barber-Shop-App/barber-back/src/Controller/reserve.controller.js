const mongoose = require('mongoose')
const ReserveSchema = require('../model/reserve.model');

const getReserver(req,res) => {
    let id = req.params.id
    try {
        const reserve = ReserveSchema.findOne(id)
        res.status(200).json(reserve);
    } catch(e) {
        res.status(500).send({message: e})
    }
}
const getAllReserver(req,res) => {
    try {
        const allReserves = ReserveSchema.find({})
        res.status(200).json(allReserves);
    } catch(e) {
        res.status(500).send({message: e})
    }
}
const createReserver(req,res) => {}
const updateReserver(req,res) => {}
const deleteReserver(req,res) => {}

module.exports = {
    getReserver,
    getAllReservedr,
    createReserver,
    updateReserver,
    deleteReserver,
}



