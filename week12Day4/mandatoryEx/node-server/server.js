//Exercise 2 : HTTP & JSON
const user = {
  firstname: "John",
  lastname: "Doe",
};

const http2 = require("http");

const server2 = http2.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
});
server2.listen(8080);
