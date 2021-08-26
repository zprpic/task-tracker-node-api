const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../../services/tasks");

const { routeHandler, checkForErrors } = require("../helpers/index");

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
    const error = checkForErrors(task);
    if (error) {
      return error;
    } else {
      return task;
    }
  })
);

router.post(
  "/",
  routeHandler(async (req, res) => {
    const task = await createTask(req.body);
    console.log(task);
    const error = checkForErrors(task);
    if (error) {
      return error;
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
    const error = checkForErrors(task);
    if (error) {
      return error;
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
    const error = checkForErrors(task);
    if (error) {
      return error;
    } else {
      return task;
    }
  })
);

module.exports = router;
