const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_name: {type: String},
    user_nasc_date: {type: String},
    user_cpf: {type: String},
    user_email: {type: String},
    user_cellphone: {type: String},
    user_role: {type: String}
})

module.exports = mongoose.model('User', userSchema);