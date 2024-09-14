const Cart = require("../Model/Cart.Model");

async function getCartItens(req, res) {
  try {
    let allItens = await Cart.find();
    res.status(200).json(allItens);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function addToCart(req, res) {
  const newIten = new Iten({
    cart_item_name: req.body.cart_item_name,
    cart_item_price: req.body.cart_item_price,
    cart_item_image: req.body.cart_item_image,
    cart_item_quantity: req.body.cart_item_quantity,
  });

  try {
    let nIten = await newIten.save();
    res.status(200).json(nIten);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function updateCartIten(req, res) {
  try {
    let cartItenUpdate = await Cart.updateOne(
      { _id: req.params.id },
      {
        $set: {
          cart_item_quantity: req.body.cart_item_quantity,
        },
      }
    );
    res.status(200).json(cartItenUpdate);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function deleteCartIten(req, res) {
  let id = req.params.id;
  try {
    await Cart.findOneAndDelete(id);
    res.status(200).json("Cart Iten Delected...");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
module.exports = {
  getCartItens,
  addToCart,
  updateCartIten,
  deleteCartIten,
};
