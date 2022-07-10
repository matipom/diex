const express = require("express");
const tasksRoutes = require("./routes/tasks.js");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
app.use(tasksRoutes);

module.exports = app;
