const express = require("express");
const app = express();
app.use("/", express.static(__dirname + "/public"));

app.get("/api/", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(user);
  res.json(user);
});

app.get("/api/:id", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log({ id: req.params.id });
  res.json({ id: req.params.id });
});
app.listen(3000);
