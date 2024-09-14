const express = require("express");

const {
  getCartItens,
  addToCart,
  updateCartIten,
  deleteCartIten,
} = require("../Controller/Cart.Controller");

const CartRouter = express.Router();

CartRouter.get("get-all-cart-itens-router", getCartItens);
CartRouter.post("add-a-item-on-cart-router", addToCart);
CartRouter.post("update-quantity-item-on-cart-router", updateCartIten);
CartRouter.delete("delete-iten-from-cart-router", deleteCartIten);

module.exports = CartRouter;
