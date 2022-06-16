const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.post("/list", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
