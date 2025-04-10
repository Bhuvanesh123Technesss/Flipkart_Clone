const express = require('express');
const { createOrder } = require('../controllers/orderController');
//const { confirmOrder } = require('../controllers/confirmOrderController');
const router = express.Router();

router.route('/order').post(createOrder);

module.exports = router;