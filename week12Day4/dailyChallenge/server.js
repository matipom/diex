let express = require("express");

let app = express();
app.use("/form", express.static(__dirname + "/public"));
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/formData", (req, res) => {
  res.send(`${req.body.email} sent you a message: ${req.body.message}`);
});

app.get("/aboutMe/:hobby", (req, res) => {
  if (isNaN(req.params.hobby)) {
    res.send(`<h1>My hobbie is: </h1> ${req.params.hobby}`);
  } else {
    res.status(400).send("Bad Request");
  }
  console.log(`${req.params.hobby}`);
});

app.get("/pic", (req, res) => {
  res.send(
    '<img src="https://bon-bon.co.il/wp-content/uploads/2022/03/Messi_Club_Ball_Gold_H57878_02_standard_hover-768x768.jpeg.webp">'
  );
});

app.listen(3000);
