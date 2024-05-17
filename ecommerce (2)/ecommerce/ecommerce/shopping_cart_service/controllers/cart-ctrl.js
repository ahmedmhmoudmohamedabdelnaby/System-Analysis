const Cart = require('../models/cart-model')

getProductsFromCart = async (req, res) => {
    console.log(req);
    await Cart.find({ userId: req.params.userId }, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Cart not found` });
        }
        return res.status(200).json({ success: true, data: cart });
    }).catch(err => console.log(err));
}

addProductsToCart = (req, res) => {
    const body = req.body;

    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a cart',
        });
    }

    const cart = new Cart(body);
    console.log(cart);

    if (!cart) {
        return res.status(400).json({ success: false, error: err });
    }

    cart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: cart._id,
                message: 'Cart created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cart not created!',
            });
        });
}

checkServiceRunning = (req, res) => {
    res.send('Hello World! - from shopping cart service.');
}

module.exports = {
    getProductsFromCart,
    addProductsToCart,
    checkServiceRunning
};
