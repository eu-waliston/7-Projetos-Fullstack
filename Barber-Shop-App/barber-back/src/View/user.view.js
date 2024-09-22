const express = require("express");
const userRouter = express.Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} =  require("../Controller/user.controller");

userRouter.get('user/all', getAllUsers);
userRouter.get('user/:id', getUserById);
userRouter.post('user/register', createUser);
userRouter.put('user/update-user/:id', updateUser);
userRouter.delete('user/delete-user/:id', deleteUser);

module.exports = userRouter;