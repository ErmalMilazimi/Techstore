import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.DB_URI;

mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Connected to database');
    }
});

export const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        images: { type: Array, required: true },
    },
    { versionKey: false }
);

const Product = mongoose.model('Product', ProductSchema, 'products');
export default Product;
