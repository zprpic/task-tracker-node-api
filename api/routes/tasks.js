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
    if (!tasks) {
      throw new NotFoundError();
    } else {
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
      throw new NotFoundError();
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
      throw new BadRequestError();
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
    if (!task) {
      throw new BadRequestError();
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
      throw new NotFoundError(id);
    } else {
      return task;
    }
  })
);

module.exports = router;
