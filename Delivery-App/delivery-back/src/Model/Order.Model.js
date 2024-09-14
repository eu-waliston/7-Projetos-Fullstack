const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
  status: { type: String, default: 'pending' }, // pending, delivered
  total: Number,
  deliveryAddress: String,
  deliveryTime: Date,
});

module.exports = mongoose.model('Order', OrderSchema);
