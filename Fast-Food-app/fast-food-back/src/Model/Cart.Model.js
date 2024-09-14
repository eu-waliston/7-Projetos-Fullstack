const { default: mongoose } = require("mongoose");

const CartSchema = mongoose.Schema({
  cart_item_name: { type: String , required: true},
  cart_item_price: { type: Number, required: true },
  cart_item_image: { type: String, required: true },
  cart_item_quantity: { type: Number , required: true},
});

module.exports = mongoose.model("Cart", CartSchema);
