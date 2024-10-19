const Product = require('../models/product.model.js');

// get all products
const getProducts = async (req,res) =>{
    try {
        const product = await Product.find({});
        res.status(200).send(product);
    } catch (error) {
        res.send(500).json({message:error.message});
    }
}

// get product by id
const getProductById = async (req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

// add products
const addProducts = async (req,res) =>{
    try {   
        const product = await Product.create(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ message:error.message })
    }
}

// update
const updateProduct = async (req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message:"Product Not Found"});
        }
        // const updateproduct = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

// delete
const deleteProduct = async (req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product Not Found"});
        }
        // await product.remove();
        // await product.deleteOne();
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({message:"Product Delete Successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProducts,
    updateProduct,
    deleteProduct
}