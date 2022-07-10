const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "1234",
    database: "postgres",
  },
});

module.exports = db;

// db("todolist")
//   .insert([{ task: "Clean bathroom" }])
//   .returning("*")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getTasks = () => {
//   return db("todolist")
//     .insert([{ task: "Clean toilet" }])
//     .returning("*")
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = {
//   getTasks,
// };
