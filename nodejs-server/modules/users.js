const db = require("../connections/connect-heroku-db.js");

const _createUser = (user) => {
  return db("users").insert(user).returning("*");
};

module.exports = {
  _createUser,
};
