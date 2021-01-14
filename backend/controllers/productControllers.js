import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//get a single product by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

//get a single product by id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ msg: "product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

//
//@desc get a single product by id
//@route POST /api/products
//@access Private admin

const createProduct = asyncHandler(async (req, res) => {
  //create new sample product
  const product = new Product({
    name: "Sample Product",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(product);
});

//@desc update product by id
//@route PUT /api/products/:id
//@access Private admin

const updateProduct = asyncHandler(async (req, res) => {
  ///get req body from form
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  //get product from req.params.id
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    //save the updated product
    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
