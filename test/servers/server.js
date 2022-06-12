let http = require("http");
let server = http.createServer(function (req, res) {
  res.end("<h1> Hello </h1>");

  console.log("work");
});

server.listen(5000);
