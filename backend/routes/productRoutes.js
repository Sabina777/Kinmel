import express from "express";
import expressAsyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";
//get all products
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//get a single product
router.get(
  "/:id/",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
