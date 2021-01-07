import express from "express";
import { protect } from "../middleware/authmiddleware.js";
const router = express.Router();
import {
  authUser,
  getUsersProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userControllers.js";

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUsersProfile)
  .put(protect, updateUserProfile);
router.post("/", registerUser);

export default router;
