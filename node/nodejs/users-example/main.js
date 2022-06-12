const { getData } = require("./modules/fetch-users.js");

getData().then((users) => {
  users.forEach((element) => {
    console.log(element.name);
  });
});
