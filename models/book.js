const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: false
    },
    dateOfCreation: {
        type: Date,
        required: false,
    },
    note: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Book', bookSchema);