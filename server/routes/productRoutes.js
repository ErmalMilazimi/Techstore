import * as productController from "../controllers/productController.js";
import express from "express";
import auth from "../middleware/auth.js";

const app = express();

// Returns all products
app.get("/", productController.getProducts);

// Returns a single product by id
app.get("/:id", productController.getProduct);

// Deletes a product by id
app.delete("/:id", auth, productController.deleteProduct);

// Updates a product by id
app.put("/:id", auth, productController.updateProduct);

// Add a new product
app.post("/addproduct", auth, productController.addProduct);

export default app;
