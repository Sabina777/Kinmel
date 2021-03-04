import express from "express";
import { protect, admin } from "../middleware/authmiddleware.js";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productControllers.js";

//use the controller functions in the route files
//there should be only routing details in the route files
//get all products
router.route("/").get(getProducts).post(protect, admin, createProduct);

//while we are using the controllers file, then we should use router.route instead of get
router.get("/top", getTopProducts);
//get a single product
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(protect, admin, updateProduct);

router.route("/:id/reviews").post(protect, createProductReview);
export default router;
