const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateNasc: { type: Date, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model("User", User);
