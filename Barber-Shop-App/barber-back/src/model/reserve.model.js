const mongoose = require("mongoose");

const reserveSchema = mongoose.Schema({
    reserve_name: {type: String},
    resereve_date: {type: Date},
    reverse_hour: {type: String},
    reverse_obs: {type: String},
})

module.exports = mongoose.model('Reserve', reserveSchema);