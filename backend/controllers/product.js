
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
}

//update products controller.
exports.updateProduct= async (req,res,err)=>{
    req.id=req.params.id

    const body=req.body;
    if (!body){
            throw "Nothing passed in the body of request";
    }
    try{
        const product= await Product.findByIdAndUpdate(req.params.id,body,{
            new: true,
            runValidators: true,
          })

        res.status(200).json(product);

    }catch(err){
        console.log(err)
    }
}

// delete a product
exports.deleteProduct = async (req, res, err) => {
    try{
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw 'Product does not exist'
        }
        product.remove()
        res.status(200).json( );
        }catch(err){
            console.log(err)
    }
};