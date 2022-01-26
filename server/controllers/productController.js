import Product from '../modules/Product.js';

// Get all Products
export let getProducts = (req, res) => {
    Product.find((err, products) => {
        if (err) {
            res.send(err);
        }
        res.json(products);
    });
};

// Get one Product by id
export let getProduct = (req, res) => {
    Product.findById(req.params.id, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
};

// Add a new Product
export let addProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
};

// Delete a Product
export let deleteProduct = (req, res) => {
    Product.deleteOne({ Product: req.params.title }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: `Product successfully deleted!` });
    });
};

// Update a Product by id
export let updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { productID: req.params.productID },
        req.body,
        { new: true },
        (err, Product) => {
            if (err) {
                res.send(err);
            }
            res.json(Product);
        }
    );
};
