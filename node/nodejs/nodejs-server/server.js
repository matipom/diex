const http = require("http");
const server = http.createServer((req, res) => {
  console.log("get a request from client");
  console.log("url", req.url);
  console.log("header", req.headers);
  let obj = {
    name: "John",
    email: "john@gmail.com",
  };
  //res.end("Hello from my first server");
  res.end(JSON.stringify(obj));
  // res.end("<h1> Hello </h1>");
});

server.listen(5000);
