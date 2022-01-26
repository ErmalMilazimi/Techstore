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

export const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        products: [
            {
                productId: Number,
                quantity: Number,
                name: String,
                price: Number,
            },
        ],
        active: {
            type: Boolean,
            default: true,
        },
        modifiedOn: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
