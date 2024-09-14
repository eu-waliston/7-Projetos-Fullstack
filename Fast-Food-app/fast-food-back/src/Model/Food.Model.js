const { default: mongoose } = require("mongoose");

const FoodSchema = mongoose.Schema({
  food_name: { type: String, required: true },
  food_rate: { type: Number, required: true },
  food_description: { type: String, required: true },
  food_price: { type: Number, required: true },
  food_flag: { type: [String], required: true },
  food_image: { type: String, required: true },
});

module.exports = mongoose.model("Food", FoodSchema);
