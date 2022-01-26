import * as productController from '../controllers/productController.js';
import express from 'express';
import auth from '../middleware/auth.js';

const app = express();

// Returns all products
app.get('/', auth, productController.getProducts);

// Returns a single product by id
app.get('/:id', auth, productController.getProduct);

// Deletes a product by id
app.delete('/:id', auth, productController.deleteProduct);

// Updates a product by id
app.put('/', auth, productController.updateProduct);

// Add a new product
app.post('/', auth, productController.addProduct);

export default app;
