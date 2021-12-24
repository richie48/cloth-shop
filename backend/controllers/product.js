const asyncHandler=require('express-async-handler')
const errorResponse=require('../utils/errorResponse')

//will need to use my model in the controllers
const Product= require('../models/Product')

//add products controller.
exports.addProduct= asyncHandler(async (req,res,next)=>{

        const product = await Product.create(req.body) 

        res.status(201).json(product)

});



//get products controller.
exports.getProduct= asyncHandler(async (req,res,next)=>{

        const products= await Product.find()
        res.status(201).json(products)        
    
});

//get a product controller
exports.getaProduct= asyncHandler(async (req,res,next)=>{
        const id=req.params.id
        if (!id){
            return next(new errorResponse("can't get this product",404));
        }
        const products= await Product.findById(req.params.id)
    
        res.status(201).json(products)   
        // next(new errorResponse("can't get this product",404));
})

//update products controller.
exports.updateProduct= asyncHandler(async (req,res,next)=>{
    req.id=req.params.id
    //will need to work here, when updating we have to pass in all the required fields to prevent it from changing to none
    const body=req.body;
    if (!body){
        return next(new errorResponse("Nothing passed in the body of request",404));
    }
    const product= await Product.findByIdAndUpdate(req.params.id,body,{
        new: true,
        runValidators: true,
          })

    res.status(200).json(product);
});

// delete a product
exports.deleteProduct = asyncHandler(async (req, res,next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorResponse('Product does not exist'))
        }
        
    product.remove()
    res.status(200).json(product);
});