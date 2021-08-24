const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../../services/tasks");

const routeHandler = require("../../middleware/route-handler");

const customAPIError = require("../../errors/custom-error");

router.get("/", async (req, res) => {
  const tasks = await getAllTasks();
  res.status(200).json({ tasks });
});
router.get(
  "/:id",
  routeHandler(async (req, res, next) => {
    const { id } = req.params;
    const task = await getTask(id);
    if (task) {
      return task;
    } else {
      next();
    }
  })
);
router.post("/", async (req, res) => {
  const task = await createTask(req.body);
  res.status(201).json({ task });
});
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isCompleted } = req.body;
  const task = await updateTask(id, name, isCompleted);
  res.status(200).json({ task });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await deleteTask(id);
  res.status(200).json({ task });
});

module.exports = router;
