var express = require('express');
var router = express.Router();
var product = require('../controllers/productController');

router.get('/getProductlist', product.getProductlist);
router.get('/searchProduct',product.searchProduct);

module.exports = router;