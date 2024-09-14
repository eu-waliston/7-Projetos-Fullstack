const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_name: {String},
    user_nasc_date: {String},
    user_cpf: {String},
    user_email: {String},
    user_cellphone: {String},
    user_role: {String}
})

module.exports = mongoose.model('User', userSchema);