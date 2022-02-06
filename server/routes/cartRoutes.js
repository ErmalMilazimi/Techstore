import * as cartController from "../controllers/cartController.js";
import express from "express";
import auth from "../middleware/auth.js";

const app = express();

// Add a product to cart
app.post("/", auth, cartController.addToCart);

export default app;
