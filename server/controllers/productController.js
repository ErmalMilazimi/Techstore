import Product from "../modules/Product.js";

// Get all Products
export let getProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(products);
    }
  });
};

// Get one Product by id
export let getProduct = (req, res) => {
  Product.findById(req.params.id, (err, Product) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(Product);
    }
  });
};

// Add a new Product
export let addProduct = (req, res) => {
  let newProduct = new Product(req.body.body);

  newProduct.save((err, Product) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(Product);
    }
  });
};

// Delete a Product
export let deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: `Product successfully deleted!` });
    }
  });
};

// Update a Product by id
export let updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body.body, (err, Product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(Product);
    }
  });
};
