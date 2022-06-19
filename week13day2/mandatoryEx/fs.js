//Exercise 1 : Reading From A File In Node.JS

const express = require("express");
const app = express();
const fs = require("fs");

fs.readFile("./text", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
app.listen(5000);

//Exercise 2 : Writing Files With Node JS

fs.writeFile("test.txt", "Hello World!", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("New text created");
  }
});

let text = "Buy oranges";
let text2 = "bla bla";
fs.appendFile("test.txt", text2, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("new text appended");
  }
});
fs.unlink("test.txt", function (err) {
  console.log("deleted");
});
