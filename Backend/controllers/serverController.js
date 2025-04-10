const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
    const { cartItems } = req.body;

    const successUrl = process.env.NODE_ENV === 'production' 
    ? 'https://your-production-site.netlify.app/success' 
    : `${process.env.UI_PORT}/success`;

    const line_items = cartItems.map((item) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item.product.name,
            },
            unit_amount: Math.round(parseFloat(item.product.price.replace(/,/g, '')) * 100), // ₹ → paise
        },
        quantity: item.qty,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: process.env.NODE_ENV === 'production' ? 'https://your-production-site.netlify.app/success' : `${process.env.UI_PORT}/success`, // your success page
            cancel_url: process.env.NODE_ENV === 'production' ? 'https://your-production-site.netlify.app/success' : `${process.env.UI_PORT}/cancel`, // your cancel page  
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};