const express = require("express");
const {
  reserveTable,
  changeReserve,
  deleteReserve,
} = require("../Controller/Reserve.Controller");

const ReserveRouter = express.Router();

ReserveRouter.get("reserve-a-tables-router/:id", reserveTable);
ReserveRouter.post("update-a-table-status-router", changeReserve);
ReserveRouter.post("delete-a-table-reserve-router", deleteReserve);

module.exports = AdminRouter;
