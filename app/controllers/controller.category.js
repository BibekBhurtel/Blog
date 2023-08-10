const Category = require('../models/model.category');

exports.index = async (req,res)=>{
    try{
        const categories = await Category.find();
        res.render('categories/index',{categories});
    }catch(err){
        console.log(err)
    }
}

exports.create = async (req, res)=>{
    res.render('categories/create');
}

exports.store = async (req,res)=>{
    try{
        const {category_name , status} = req.body;
        await Category.create({category_name , status});
        res.redirect('/category');
    }catch(err){
        console.log(err);
    }
}

exports.destroy = async (req, res) =>{
    try{
        const id = req.params.id;
        await Category.findOneAndDelete({_id:id});
        res.redirect('/category')
    }catch(err){
        console.log(err.message);
        res.redirect('/category')
    }

}