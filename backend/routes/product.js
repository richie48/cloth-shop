const express = require('express');

//model
const {addProduct} =require('../controllers/product')

const router = express.Router()

router.route('/').get(addProduct)

module.exports = router;