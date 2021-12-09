const mongoose=require('mongoose')

const reviewSchema = new mongoose.Schema({
    name:{
        type:Number,
        required:true,
    },
    comment:String,
    rating:{
        type:Number,
        required:true,
    },

})

//need to add a review field in the product model but it needs to be a model too.
//image field, don't know how i will get the images yet.
const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title to this product'],
        maxlength: [50, 'title cannot be more than 50 characters'],
    },
    description:{
        type:String,
        required:[true,'Please add a description'],
        maxlength: [300, 'description should be no more than 300 characters'],
    },
    price: {
        type:Number,
        required:[true,'please add a price tag']
    },
    image: {
        type: String,
        required: true,
      },
    brand: {
        type: String,
        required: true,
      },
    category: {
        type: String,
        required: true,
      },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
    review:[reviewSchema],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },


})

module.exports = mongoose.model('Products', productSchema);