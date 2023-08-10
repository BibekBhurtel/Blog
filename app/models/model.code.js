const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    code: {
        type: String,
        required: [true, 'Code is required']
    }
});

module.exports = mongoose.model('Code', codeSchema);