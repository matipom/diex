const db = require('../connections/connect-heroku-db.js');

const _getAllProduct = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name');
}

const _getProduct = (product_id) => {
  return db('products')
  .select('id','name','price')
  .where({id:product_id});
}

const _searchProduct = (q) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name',`${q}%`)
}

const _createProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}

const _updateProduct = (id, product) => {
  return db('products')
  .update(product)
  .where({id:id})
  .returning('*')
}

const _deleteProduct = (id) => {
  return db('products')
  .del()
  .where({id:id})
  .returning('*')
}

module.exports = {
  _getAllProduct,
  _getProduct,
  _searchProduct,
  _createProduct,
  _updateProduct,
  _deleteProduct
}
