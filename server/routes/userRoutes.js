import * as userController from "../controllers/userController.js";
import express from "express";
import auth from "../middleware/auth.js";
const app = express();

// Register a new user
app.post("/register", userController.register);

// Login to an existing user
app.post("/login", userController.login);

// Get data of the logged in user
app.get("/current", auth, userController.current);

export default app;
