const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name:{
        type: String,
        required:[true, 'Category field is required']
    },
    status:{
        type: String,
        required: [true, 'Status field is required'],
        enum:['active' , 'inactive'],
        default:"active",
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);