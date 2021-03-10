var express = require('express');
var router = express.Router();
var orders = require('../controllers/orderController');

router.get('/getOrderListByUid',orders.getOrderListByUid);
router.post('/addorder',orders.addorder);

module.exports = router;
