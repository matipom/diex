const db = require("./connections/connect-db.js");
const express = require("express");
const app = express();

// const cors = require("cors");
// const dotenv = require("dotenv");
// const db = require("./node-db");

// import tasksRoutes from "./routes/tasks";
// dotenv.config();

// app.use(tasksRoutes);
app.get("/tasks", (req, res) => {
  db("todolist")
    .select("id", "task")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on port ${process.env.PORT || 5000}`);
  console.log();
});

// app.listen(3000, () => {
//   console.log("Server running successfully on 3000");
// });
