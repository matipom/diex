const {products} = require('../modules/products.js');

const getProducts = (req,res) => {
  console.log('getProducts');
  res.json(products)
}

const getProduct = (req,res) => {
  const id = req.params.id
  const product = products.find(item => item.id == id);
  if(!product){
    return res.status(404).json({msg:'not found'})
  }
  res.json(product);
}

const searchProduct = (req,res) => {
  const name = req.query.q;
  const filter_products = products.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  })
  if(filter_products<1){
   return res.status(200).json({msg:'product not found'})
  }
  res.json(filter_products)
}

const createProduct = (req, res) => {
  const new_product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }
  products.push(new_product);
  res.json(products);
}

const updateProduct = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);
  if(index == -1) {
    return res.status(404).json({msg:'not found'})
  }
  const updated = {
    id: products[index].id,
    name: req.body.name,
    price:req.body.price
  }
  res.status(200).json(updated);
}

const deleteProduct = (req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item=> item.id == id);
  if(index == -1) return res.status(404).json({msg:'not found'})
  products.splice(index,1);
  res.json({msg:'product deleted',products:products})
}

module.exports = {
  getProducts,
  getProduct,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
