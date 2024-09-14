const express = require("express")

let BooksRouter = express.Router()

const {
    getABook,
    getAllBooks,
    createBook,
    updateBoook,
    deleteBook,
} = require("../Controller/Books.Controller")

BooksRouter.get("/library-app/api/v1/get-all-books", getAllBooks)
BooksRouter.get("/library-app/api/v1/get-a-book", getABook)
BooksRouter.post("/library-app/api/v1/create-a-book", createBook)
BooksRouter.put("/library-app/api/v1/update-a-book/:id", updateBoook)
BooksRouter.delete("/library-app/api/v1/delete-a-book/:id", deleteBook)

module.exports = BooksRouter;