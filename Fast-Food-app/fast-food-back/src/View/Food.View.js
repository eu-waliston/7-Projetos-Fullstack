const express = require("express");
const {
  getAllFood,
  getFood,
  addFood,
  updateFood,
  deleteFood,
} = require("../Controller/Food.Controller");

const FoodRouter = express.Router();

FoodRouter.get("all-food-router", getAllFood);
FoodRouter.get("get-a-food-router/:id", getFood);
FoodRouter.post("add-a-food-router", addFood);
FoodRouter.post("update-a-food-router:id", updateFood);
FoodRouter.delete("delete-a-food-router", deleteFood);

module.exports = FoodRouter;
