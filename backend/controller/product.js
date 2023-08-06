const fs = require('fs');
const model = require('../models/product')
const Product = model.Product;
const mongoose = require('mongoose');

exports.getAllProducts = async (req,res)=>{
    const products = await Product.find();
    res.json(products);
};

