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
app.use(cors());

app.use('/api/v1',products);
app.use('/api/v1',orders);
app.use(paymentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is running at: ${process.env.PORT}\nstate: ${process.env.NODE_ENV} `);
});

//app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/test', (req, res) => {
    res.send('Server is working!');
});

module.exports = app;