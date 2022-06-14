//Exercise 3 : Express

let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is an HTML tag</h1>");
});

app.listen(3000);
