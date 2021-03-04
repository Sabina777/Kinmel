import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//get all products
const getProducts = asyncHandler(async (req, res) => {
  //set the pagesize

  const pagesize = 10;
  const page = Number(req.query.pageNumber) || 1;

  //get keyword from req query
  console.log(req.query.keyword);
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  //count the product
  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pagesize)
    .skip(pagesize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pagesize) });
});

//skip method--skip the given number of the products

//math.ceil ---->function that always round up the number to the largest integer

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

//@desc create new review
//@route POST /api/products/:id/review
//@access Private

const createProductReview = asyncHandler(async (req, res) => {
  ///get req body from form
  const { rating, comment } = req.body;

  //get product from req.params.id
  const product = await Product.findById(req.params.id);
  if (product) {
    //check if the user has already reviewed
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    //find average product rating.reduce((acc,item)=>item.rating+acc,0)
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res.status(201).json({ msg: "reviews created" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc get top rated products
//@route GET /api/products/top
//@access Public

const getTopProducts = asyncHandler(async (req, res) => {
  //sort the top rated products and limit 3
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
};
