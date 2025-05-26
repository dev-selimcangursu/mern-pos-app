const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/store", ProductController.store);
router.get("/get/:categoryId", ProductController.getProduct);
router.get("/fetch", ProductController.allProduct);
router.get("/get/section/:productId", ProductController.getProductById);
router.get("/add/features", ProductController.addProductFeature);
router.get("/search/:productName", ProductController.searchProduct);

module.exports = router;
