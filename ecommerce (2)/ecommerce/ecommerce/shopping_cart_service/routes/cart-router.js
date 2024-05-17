const express = require('express');
const CartCtrl = require('../controllers/cart-ctrl');
const router = express.Router();

router.post('/cart', CartCtrl.addProductsToCart);
router.get('/cart/:userId', CartCtrl.getProductsFromCart);
router.get('/', CartCtrl.checkServiceRunning);

module.exports = router;