const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

const PersonExport = mongoose.model('Person', PersonSchema);
module.exports = PersonExport;