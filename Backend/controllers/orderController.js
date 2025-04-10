const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

//Post create order API - /api/v1/order 
exports.createOrder = async (req, res, next) => {

    console.log(req.body,'DATA');
    const cartItems = req.body;
    
    // Calculate the total amount
    const amount = cartItems.reduce((acc, item) => {
        // Replace commas in the price string and convert to a float
        const price = parseFloat(item.product.price.replace(/,/g, ''));
        return acc + (price * item.qty);
    }, 0).toFixed(2);
    
    const status = "Pending";
    console.log("Amount: ₹"+amount);

    const order = await orderModel.create({cartItems, amount, status});

    // Updating product stock
    cartItems.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    res.json(
        {
            success: true,
            order
        }
    )
}
