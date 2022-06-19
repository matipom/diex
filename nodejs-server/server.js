const express = require('express');
const cors = require('cors');
// const {products} = require('./modules/products.js');
const router = require('./routes/products.js')

const app = express();

app.listen(5000, ()=>{
  console.log('server is running on port 5000');
})

// console.log(__dirname);
// app.use('/', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/api/products', router);


// user request => middleware => response

const logger = (req,res,next) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  next()
}

const auth = (req,res,next) => {
  if(req.query.user == 'admin'){
    next()
  }
  else {
    return res.status(401).send('not authorized')
  }
}

app.use(auth);

app.get('/about', logger, (req,res) => {
  res.send('bla bla bla page');
})
