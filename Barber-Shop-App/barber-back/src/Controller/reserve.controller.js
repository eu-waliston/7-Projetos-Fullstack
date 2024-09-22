const mongoose = require('mongoose')
const ReserveSchema = require('../model/reserve.model');

const getReserver = (req,res) => {
    let id = req.params.id
    try {
        const reserve = ReserveSchema.findOne(id)
        res.status(200).json(reserve);
    } catch(e) {
        res.status(500).send({message: e})
    }
}

const getAllReserves = (req,res) => {
    try {
        const allReserves = ReserveSchema.find({})
        res.status(200).json(allReserves);
    } catch(e) {
        res.status(500).send({message: e})
    }
}
const createReserver = (req,res) => {
    const reserve = new ReserveSchema({
        reserve_name: req.body.reserve_name,
        resereve_date: req.body.resereve_date,
        reverse_hour: req.body.reverse_hour,
        reverse_obs: req.body.reverse_obs,
    })

    try {
        const newReserve = reserve.save()
        res.tatus(200).json(newReserve)
    } catch (error) {
        res.status(500).send({message: error})
    }
}
const updateReserver = async (req,res) => {
    try {
        let reserveUpdate = await ReserveSchema.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    reserve_name: req.body.reserve_name,
                    resereve_date: req.body.resereve_date,
                    reverse_hour: req.body.reverse_hour,
                    reverse_obs: req.body.reverse_obs,
                }
            }
        )
        res.tatus(200).json(reserveUpdate)
    } catch (error) {
        res.tatus(500).send({message: error})
    }
}
const deleteReserver = async  (req,res) => {
    let id = req.params.id;
    try {
        await ReserveSchema.findByIdAndDelete(id)
        res.status(200).json('Reserve Deletada!')
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {
    getReserver,
    getAllReserves,
    createReserver,
    updateReserver,
    deleteReserver,
}



