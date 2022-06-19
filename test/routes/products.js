const express = require("express");
const { getProducts } = require("../controllers/products.js");
const router = express.Router();

router.get("/api/products", getProducts);
router.get("/api/products/:id", getProduct);
router.get("/api/search", searchProduct);
module.exports = router;
