const express = require('express')
const router = express.Router();
const CategoryContoller = require('../controllers/CategoryController')

router.get('/store',CategoryContoller.store)
router.get('/fetch',CategoryContoller.fetch)




module.exports = router