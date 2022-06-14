//install express
//install bodyparse if express doesnt have
//instal npm i cors if there is problem
const express = require("express");
const { products } = require("./module/products.js");
const app = express();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  // console.log("req.body =>", req.body);
  // res.json({ msg: "post ok" });
  const new_product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(new_product);
  res.json(products);
});

app.get("/api/search", (req, res) => {
  console.log(req.query);
  const name = req.query.q;
  const filter_products = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filter_products < 1) {
    return res.status(200).json({ msg: "product not found" });
  }

  res.json(filter_products);
  // res.json({ msg: "ok" });
});
//modifiy, take a new input and call it
app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((item) => item.id == id);
  if (index == -1) {
    return res.status(404).json({ msg: "not found" });
  }
  const updated = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json(updated);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ msg: "not found" });
  }
  console.log(id);
  res.json(product);
  // res.json({ msg: "ok" });
});
