import * as userController from "../controllers/userController.js";
import express from "express";
import auth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";
const app = express();

// Register a new user
app.post("/register", userController.register);

// Login to an existing user
app.post("/login", userController.login);

// Get data of the logged in user
app.get("/current", auth, userController.current);

// Get all users (admin)
app.get("/users", auth, isAdmin, userController.getAllUsers);

// Delete user (admin)
app.delete("/deleteuser", auth, isAdmin, userController.deleteUser);

// Add a product to cart
// app.post("/addtocart", auth, userController.addToCart);

export default app;
