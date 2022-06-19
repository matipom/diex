const { products } = require("../module/products.js");

const getProducts = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const id = req.params.id;
  const product = products.fin;
};

module.exports = {
  getProducts,
};
