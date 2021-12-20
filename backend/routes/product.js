const express = require('express');

//model
const {addProduct,getProduct,getaProduct,updateProduct,deleteProduct} =require('../controllers/product')

const router = express.Router()

router.route('/').get(getProduct).post(addProduct)

router.route('/:id').put(updateProduct).delete(deleteProduct).get(getaProduct);

module.exports = router;