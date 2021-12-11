
//will need to use my model in the controllers
const Product= require('../models/Product')

//add products controller.
exports.addProduct= async (req,res,err)=>{
    try{
        const product = await Product.create(req.body) 

        res.status(201).json(product)
    }catch(err){
        console.log(err)
    }
}



//get products controller.
exports.getProduct= async (req,res,err)=>{
    try{
        const products= await Product.find()
        res.status(201).json(products)        
    }catch(err){
        console.log(err)
    }

    res.send('get product controller is working')
}

//update products controller.
exports.updateProduct= async (req,res,err)=>{
    res.send('update product controller is working')
}