const {
  _getAllProduct,
  _getProduct,
  _searchProduct,
  _createProduct,
  _updateProduct,
  _deleteProduct,
} = require("../modules/products.js");

const getProducts = (req, res) => {
  _getAllProduct()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const getProduct = (req, res) => {
  _getProduct(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const searchProduct = (req, res) => {
  _searchProduct(req.query.q)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const createProduct = (req, res) => {
  _createProduct(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
  // const new_product = {
  //   id: products.length + 1,
  //   name: req.body.name,
  //   price: req.body.price
  // }
  // products.push(new_product);
  // res.json(products);
};

const updateProduct = (req, res) => {
  _updateProduct(req.params.id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
  // const id = req.params.id;
  // const index = products.findIndex(item => item.id == id);
  // if(index == -1) {
  //   return res.status(404).json({msg:'not found'})
  // }
  // const updated = {
  //   id: products[index].id,
  //   name: req.body.name,
  //   price:req.body.price
  // }
  // res.status(200).json(updated);
};

const deleteProduct = (req, res) => {
  _deleteProduct(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
  // const id = req.params.id;
  // const index = products.findIndex(item=> item.id == id);
  // if(index == -1) return res.status(404).json({msg:'not found'})
  // products.splice(index,1);
  // res.json({msg:'product deleted',products:products})
};

module.exports = {
  getProducts,
  getProduct,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
