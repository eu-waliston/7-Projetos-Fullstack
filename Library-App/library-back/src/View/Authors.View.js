const express = require("express")

let AuthorsRouter = express.Router()

const {
    getAllAuthors,
    getAnAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require("../Controller/Authors.Controller")

AuthorsRouter.get("/library-app/api/v1/get-all-authors", getAllAuthors)
AuthorsRouter.get("/library-app/api/v1/get-a-author", getAnAuthor)
AuthorsRouter.post("/library-app/api/v1/create-a-author", createAuthor)
AuthorsRouter.put("/library-app/api/v1/update-a-author/:id", updateAuthor)
AuthorsRouter.delete("/library-app/api/v1/delete-a-author/:id", deleteAuthor)

module.exports = AuthorsRouter;