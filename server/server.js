import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Default routes
app.get('/', (req, res) => {
    res.send(`App name: ${process.env.APP_NAME}`);
});

// User routes
app.use('/user', userRoutes);
// Product routes
app.use('/product', productRoutes);
// Cart routes
app.use('/cart', cartRoutes);

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server running on localhost:${process.env.SERVER_PORT}`)
);
