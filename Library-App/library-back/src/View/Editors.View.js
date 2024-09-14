const express = require("express")
const Book = require("../Model/Books.Model");
let EditorRouter = express.Router()

const {
    getAEditor,
    getAllEditors,
    createEditor,
    updateEditor,
    deleteEditor,
} = require("../Controller/Editors.Controller")

EditorRouter.get("/library-app/api/v1/register", CreateUser)
EditorRouter.post("/library-app/api/v1/login", RegisterUser)
EditorRouter.get("/library-app/api/v1/get-a-user/:id", GetUser)
EditorRouter.get("/library-app/api/v1/get-all-users", GetAllUsers)
EditorRouter.put("/library-app/api/v1/update-a-user/:id", UpdateUser)
EditorRouter.delete("/library-app/api/v1/delete-a-user/:id", DeleteUser)

module.exports = EditorRouter;