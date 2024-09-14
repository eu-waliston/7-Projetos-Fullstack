const mongoose = require("mongoose");

const RecetasSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  recipe: {
    type: [String],
    default: undefined,
    required: true,
  },
  comment: { type: String },
  rate: { type: Number, required: true },
});

module.exports = mongoose.model("Receitas", RecetasSchema);
