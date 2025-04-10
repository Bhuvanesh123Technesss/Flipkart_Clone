// backend/server.js
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const app = express();
const stripe = Stripe("sk_test_51RBETBCOlpvHtWbh4oNBq1lZPoEIU2DuAlHqsrRI9T2kVR3SMOUDf5sMgYnEYwLs6eqUxqUYoAuKzgPMlUBoM5p700DtTuEoyf"); // Replace with your secret key
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

app.use(cors());
app.use(express.json());

app.post("api/vi/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

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

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success", // your success page
    cancel_url: "http://localhost:5173/cancel",   // your cancel page
  });

  res.json({ url: session.url });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
