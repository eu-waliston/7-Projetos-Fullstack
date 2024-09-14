const express = require("express");
const router = express.Router();

const {
  createArecipe,
  getAllRecipes,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controller/recive.controller");

router.get("/recipes", getAllRecipes);

router.get("/recipes/:id", getSingleRecipe);

router.post("/recipes", createArecipe);

router.patch("/recipes/:id", updateRecipe);

router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
