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

export const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        cart: { type: Array, required: true},
        token: { type: String, required: false },
    },
    { versionKey: false }
);

const User = mongoose.model('User', UserSchema, 'users');
export default User;
