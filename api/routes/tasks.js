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

const { NotFoundError, BadRequestError } = require("../../errors/index");

router.get(
  "/",
  routeHandler(async (req, res) => {
    const tasks = await getAllTasks();
    if (tasks) {
      return tasks;
    }
  })
);

router.get(
  "/:id",
  routeHandler(async (req, res, next) => {
    const { id } = req.params;
    const task = await getTask(id);
    if (!task) {
      return new NotFoundError(`No task with id: ${id} found`);
    } else {
      return task;
    }
  })
);

router.post(
  "/",
  routeHandler(async (req, res) => {
    const task = await createTask(req.body);
    if (!task) {
      return new BadRequestError(
        "Failed to create new task: Task name must be between 10-30 characters long"
      );
    } else {
      return task;
    }
  })
);

router.patch(
  "/:id",
  routeHandler(async (req, res) => {
    const { id } = req.params;
    const { name, isCompleted } = req.body;
    const task = await updateTask(id, name, isCompleted);
    if (task.errors) {
      return new BadRequestError(
        "Failed to edit current task: Task name must be between 10-30 characters long"
      );
    }
    if (task.name === "CastError") {
      return new NotFoundError(`No task with id: ${id} found`);
    } else {
      return task;
    }
  })
);

router.delete(
  "/:id",
  routeHandler(async (req, res) => {
    const { id } = req.params;
    const task = await deleteTask(id);
    if (!task) {
      return new NotFoundError(`No task with id: ${id} found`);
    } else {
      return task;
    }
  })
);

module.exports = router;
