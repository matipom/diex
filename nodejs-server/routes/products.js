const express = require("express");
const {
  getProducts,
  getProduct,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.js");

const router = express.Router();

router.get("/search", searchProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
