const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title field is required"]
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:[true, "Category is required"],
    },
    content:{
        type: String,
        required:[true, "Content field is required"]
    },
    thumbnail:{
        type: String,
        required:[true, "Thumbnail field is required"]
    },
    author:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required:[true, "Title field is required"]
    },
},
{
    timestamps: true
});
module.exports = mongoose.model('Blog', blogSchema);