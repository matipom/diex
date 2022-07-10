const express = require('express');
const {
       createUser,
     } = require('../controllers/users.js');

const users_router = express.Router();

// router.get('/search', searchProduct);
// router.get('/:id', getProduct);
// router.get('/', getProducts);

users_router.post('/', createUser);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

module.exports = users_router;
