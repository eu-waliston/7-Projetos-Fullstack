const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  borrowed_books : {
    type: [Schema.ObjectId],
    ref: "Loans"
  },
  fines: {
    type: Number
  }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
