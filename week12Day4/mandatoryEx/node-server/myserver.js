//Exercise 1 : HTTP

const http = require("http");

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<h1>This is my first response</h1><h1>This is my second response</h1><h3>This is my third response</h3>"
    );
  })
  .listen(3000);
