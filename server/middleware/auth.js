import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
let tokenSecret = process.env.TOKEN_SECRET || 'secret';

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        const decoded = jwt.verify(token, tokenSecret);

        req.user = decoded;
    } catch (err) {
        return res.status(401).send(err);
    }
    return next();
};

export default verifyToken;
