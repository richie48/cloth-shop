const express = require('express');

//model
const {addProduct,getProduct,updateProduct} =require('../controllers/product')

const router = express.Router()

router.route('/').get(getProduct).post(addProduct)

router.route('/:id').put(updateProduct);

module.exports = router;