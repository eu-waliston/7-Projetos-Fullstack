const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const editorsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    unique: true,
  },
  books: {
    type: [Schema.ObjectId],
    required: true,
  },
});

//create a model
const Publisher = mongoose.model("Publisher", editorsSchema);

//export the model
module.exports = Publisher;
