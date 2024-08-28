const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loansSchema = mongoose.Schema({
    user_id : {
        type : Schema.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    book_id : {
        type: Schema.ObjectId,
        ref: "Books",
        required: true,
        unique: true,
    },
    due_date : {
        type: Date,
        required: true,
        unique: true,
    },
    return_date : {
        type: Date,
        required: true,
        unique: true,
    },
    fine: {
        type: Number,
    }
})

// Create a model
const Loan = mongoose.model('Loan', loansSchema);

// Export the model
module.exports = Loan;
