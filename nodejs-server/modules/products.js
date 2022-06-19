// const products = [
//   { id:1, name: 'iPhone', price: 800},
//   { id:2, name: 'iPad', price: 650},
//   { id:3, name: 'iWatch', price: 750},
// ]
const fs = require('fs');

const f = fs.readFileSync('../myfilename');
const data = f.toString();
const products = JSON.parse(data));

module.exports = {
  products
}
