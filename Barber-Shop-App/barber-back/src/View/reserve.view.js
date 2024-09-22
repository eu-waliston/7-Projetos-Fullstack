const express = require("express");
const reserveRouter = express.Router();

const {
    getReserver,
    getAllReserves,
    createReserver,
    updateReserver,
    deleteReserver,
} =  require("../Controller/reserve.controller");

reserveRouter.get('reserve/all', getAllReserves);
reserveRouter.get('reserve/:id', getReserver);
reserveRouter.post('reserve/register', createReserver);
reserveRouter.put('reserve/update-user/:id', updateReserver);
reserveRouter.delete('reserve/delete-user/:id', deleteReserver);

module.exports = reserveRouter;