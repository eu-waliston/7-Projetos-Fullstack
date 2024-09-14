const Food = require("../Model/Food.Model");

async function getAllFood(req, res) {
  try {
    let allFood = await Food.find();
    res.status(200).json(allFood);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function getFood(req, res) {
  let id = req.params.id;
  try {
    let food = await Food.findById(id);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function addFood(req, res) {
  const newFood = new Food({
    food_name: req.body.food_name,
    food_rate: req.body.food_rate,
    food_description: req.body.food_description,
    food_price: req.body.food_price,
    food_flag: req.body.food_flag,
    food_image: req.body.food_image,
  });

  try {
    let nFood = await newFood.save();
    res.status(200).json(nFood);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function updateFood(req, res) {
  try {
    let foodUpdate = await Food.updateOne(
      { _id: req.params.id },
      {
        $set: {
          food_name: req.body.food_name,
          food_rate: req.body.food_rate,
          food_description: req.body.food_description,
          food_price: req.body.food_price,
          food_flag: req.body.food_flag,
          food_image: req.body.food_image,
        },
      }
    );
    res.status(200).json(foodUpdate);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function deleteFood(req, res) {
  let id = req.params.id;
  try {
    await Food.findOneAndDelete(id);
    res.status(200).json("Well Done!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllFood,
  getFood,
  addFood,
  updateFood,
  deleteFood,
};
