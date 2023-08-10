const Blog = require('../models/model.blog');
const Category = require('../models/model.category');

exports.index = async (req,res)=>{
    try{
        const blogs = await Blog.find().populate(['author','Category']);
        res.render('blogs/index',{blogs})
    }catch(err){
        console.log(err)
    }
    
}

exports.create = async (req, res)=>{
    try{
        const categories = await Category.find();
        res.render('blogs/create',{categories});
     }catch(err){
        console.log(err.message)
     }
    }

exports.store = async (req,res) =>{
    try{
        const {title, content , thumbnail , author, category} = req.body;
        await Blog.create({title, content , thumbnail , author, category});
        res.redirect('/blog');
    }catch(error){
        console.log(error)
    }
}