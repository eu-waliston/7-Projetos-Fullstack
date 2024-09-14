const express = require("express")

let LoanRouter = express.Router()

const {
    getALoan,
    getAllLoans,
    createLoans,
    updateLoans,
    deleteLoans
} = require("../Controller/Loans.Controller")

LoanRouter.get("/library-app/api/v1/get-all-loans", getAllLoans)
LoanRouter.get("/library-app/api/v1/get-a-loan/:id", getALoan)
LoanRouter.post("/library-app/api/v1/create-a-loan", createLoans)
LoanRouter.put("/library-app/api/v1/update-a-loan/:id", updateLoans)
LoanRouter.delete("/library-app/api/v1/delete-a-loan/:id", deleteLoans)

module.exports = LoanRouter;