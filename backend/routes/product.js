const express = require('express');
const productController = require('../controller/product');
const router = express.Router();

router
.get('/products',productController.getAllProducts)



exports.router = router;