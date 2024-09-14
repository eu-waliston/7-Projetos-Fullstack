const { default: mongoose, mongo } = require("mongoose");

const ReserveSchema = mongoose.Schema({
  table_number: { type: Number, required: true },
  reserve_date: { type: Date, required: true },
  reserve_hour: { type: String, required: true },
  reserve_name: { type: String, required: true },
  table_status: { type: [String], required: true },
});

module.exports = mongoose.model("Reserve", ReserveSchema);
