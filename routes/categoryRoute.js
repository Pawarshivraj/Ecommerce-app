import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
//create controller routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update controller routes
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// allget route
router.get("/get-category",categoryController);

//single category route
router.get("/single-category/:slug",singleCategoryController)

// delete router
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)

export default router;
