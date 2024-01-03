import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
import braintree from "braintree";

const router = express.Router();

//route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//updateroute
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
// get all product
router.get("/get-product", getProductController);
//get single product
router.get("/get-product/:slug", getSingleProductController);
// get photo
router.get("/product-photo/:pid", productPhotoController);
//delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);
// filter product
router.post("/product-filters", productFiltersController);
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search the item
router.get("/search/:keyword", searchProductController);

// similar product
router.get("/related-product/:pid/:cid", relatedProductController);

// get product by category
router.get("/product-category/:slug",productCategoryController)

//payement route
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController)

export default router;
