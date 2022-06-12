//Part I:
let imported = require("./main.js");
const b = 5;

console.log(
  `the sum of the imported number and b is: ${imported.largeNumber + b}`
);
//Part II:

let http = require("http");

let server = http.createServer((req, res) => {
  console.log("im listening...");
  res.setHeader("Content-Type", "text/html");
  res.end(
    `My module is: ${imported.largeNumber + b}<h1>Hi there at the frontend</h1>`
  );
});

server.listen(3000);

//Part III:

let time = imported.myDateAndTime();

let server2 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(
    `<h1>The date today is: ${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()} and The time is: ${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}</h1>`
  );
});

server2.listen(8080);
