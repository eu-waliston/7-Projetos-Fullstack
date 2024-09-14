const express = require("express")

let UserRouter = express.Router()

const {
    CreateUser,
    RegisterUser,
    GetUser,
    GetAllUsers,
    UpdateUser,
    DeleteUser
} = require("../Controller/User.Controller")

UserRouter.get("/library-app/api/v1/register", CreateUser)
UserRouter.post("/library-app/api/v1/login", RegisterUser)
UserRouter.get("/library-app/api/v1/get-a-user/:id", GetUser)
UserRouter.get("/library-app/api/v1/get-all-users", GetAllUsers)
UserRouter.put("/library-app/api/v1/update-a-user/:id", UpdateUser)
UserRouter.delete("/library-app/api/v1/delete-a-user/:id", DeleteUser)

module.exports = UserRouter;