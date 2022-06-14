let http = require("http");
let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("<h1>Homepage</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>About</h1>");
  }
  res.end("<h1> Hello </h1>");
  //so long
  console.log("work");
});

server.listen(5000);
