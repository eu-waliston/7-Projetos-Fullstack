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

UserRouter.get("/anime-blog/api/v1/register", CreateUser)
UserRouter.post("/anime-blog/api/v1/login", RegisterUser)
UserRouter.get("/anime-blog/api/v1/get-a-user/:id", GetUser)
UserRouter.get("/anime-blog/api/v1/get-all-users", GetAllUsers)
UserRouter.put("/anime-blog/api/v1/update-a-user/:id", UpdateUser)
UserRouter.delete("/anime-blog/api/v1/delete-a-user/:id", DeleteUser)

module.exports = UserRouter;