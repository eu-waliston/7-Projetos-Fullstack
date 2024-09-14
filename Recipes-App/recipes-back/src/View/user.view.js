const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getAnUser,
  createAuser,
  deleteAuser,
  updatedUser,
  loginWithUser,
} = require("../Controller/user.controller");

router.get("/users", getAllUsers);

router.get("/users/:id", getAnUser);

router.post("/users/register", createAuser);

router.post("/users/login", loginWithUser);

router.put("/users/:id", updatedUser);

router.delete("/users/:id", deleteAuser);

module.exports = router;
