const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product.model.js');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// router
const productRouters = require('./routers/product.router.js');
app.use('/api/products',productRouters);



app.get('/',function(req,res){
    res.send('this is get api...');
    
});

// app.post('/api/products', async function(req,res){
//     try {   
//         const product = await Product.create(req.body);
//         res.status(200).send(product);
//     } catch (error) {
//         res.status(500).json({ message:error.message })
//     }
// });

// app.get('/api/products', async (req,res) => {
//     try {
//         const product = await Product.find({});
//         res.status(200).send(product);
//     } catch (error) {
//         res.send(500).json({message:error.message});
//     }
// });



// app.get('/api/product/:id', async (req,res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });




// update
// app.put('/api/product/:id', async (req,res) =>{
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             return res.status(404).json({message:"Product Not Found"});
//         }
//         // const updateproduct = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });



// delete
// app.delete('/api/product/:id', async (req,res) =>{
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         if(!product){
//             return res.status(404).json({message:"Product Not Found"});
//         }
//         // await product.remove();
//         // await product.deleteOne();
//         const deleteProduct = await Product.findByIdAndDelete(id);
//         res.status(200).json({message:"Product Delete Successfully"});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// });



mongoose.connect('mongodb+srv://sunilkumarsk8899:FWio2ZKbzeY5YgZE@backenddb.dxvxz.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!');
    app.listen(3000,function(){
        console.log('Express js api run on PORT:3000');
    });
  }).catch(() => {
    console.log( 'Error connecting to database' )
  });