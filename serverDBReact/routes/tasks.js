const express = require("express");
const {
  getTasks,
  getTaskCount,
  getTask,
  saveTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.js");

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/count", getTaskCount);
router.get("/tasks/:id", getTask);
router.post("/tasks", saveTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

module.exports = router;
