const express = require('express');
const app = express();
//const port = 8000;
const connectDatabase = require('./config/connectDatabase');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const products = require('./Routes/product');
const orders = require('./Routes/order');
const paymentRoutes = require('./Routes/server');

connectDatabase();   

app.use(express.json());
//app.use(cors());

// Allow requests from your frontend domain
app.use(cors({
    origin: 'https://flipkart-clone-frontend-15qzde7mj-bhuvaneshs-projects-b53b4614.vercel.app'
}));

app.use('/api/v1',products);
app.use('/api/v1',orders);
app.use(paymentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is running at: ${process.env.PORT}\nstate: ${process.env.NODE_ENV} `);
});

module.exports = app;