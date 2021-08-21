const express = require("express");
const router = express.Router();

const { getAllTasks, createTask } = require("../../services/tasks");

/* router.route("/").get(getAllTasks); */
router.get("/", async (req, res) => {
  const tasks = await getAllTasks();
  res.status(200).json({ tasks });
});
router.post("/", async (req, res) => {
  const task = await createTask(req.body);
  res.status(201).json({ task });
});

module.exports = router;
