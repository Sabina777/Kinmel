import express from "express";
import { protect, admin } from "../middleware/authmiddleware.js";
const router = express.Router();
import {
  authUser,
  getUsersProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUsersProfile)
  .put(protect, updateUserProfile);
router.route("/").post(registerUser);
router.route("/").get(protect, getUsers);
router
  .route("/:id")
  .delete(protect, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
