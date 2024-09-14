const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Place an order
router.post('/', async (req, res) => {
  const { userId, products, total, deliveryAddress } = req.body;

  const newOrder = new Order({
    userId,
    products,
    total,
    deliveryAddress,
    deliveryTime: new Date(),
  });

  await newOrder.save();
  res.status(201).json(newOrder);
});

// Get user orders
router.get('/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

module.exports = router;
