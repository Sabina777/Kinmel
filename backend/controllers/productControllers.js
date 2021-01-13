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

export { getProducts, getProductById, deleteProduct };
