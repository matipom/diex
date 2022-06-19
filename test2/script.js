const express = require("express");
const app = express();
//require the module
const bodyParser = require("body-parser");

app.use(express.static("public"));
//use the module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("welcome, " + req.body.fullname);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
