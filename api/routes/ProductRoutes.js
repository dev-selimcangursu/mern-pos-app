const express = require('express')
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.get('/store',ProductController.store)
router.get('/get/:categoryId',ProductController.getProduct)
router.get('/fetch',ProductController.allProduct)
router.get('/get/section/:productId',ProductController.getProductById)


module.exports = router