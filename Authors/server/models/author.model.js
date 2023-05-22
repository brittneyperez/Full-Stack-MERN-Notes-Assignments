const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        require: [true, "The author's name is required"],
        minlength: [2, "The author's name must be at least 2 characters."],
        maxlength: [50, "The author's exceeds character limit."]
    }
}, { timestamps: true })

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author