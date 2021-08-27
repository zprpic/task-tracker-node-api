const express = require("express");
const router = express.Router();

const { routeHandler } = require("./helpers/index");

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./routes/index");

router.route("/").get(routeHandler(getAllTasks)).post(routeHandler(createTask));

router
  .route("/:id")
  .get(routeHandler(getTask))
  .patch(routeHandler(updateTask))
  .delete(routeHandler(deleteTask));

module.exports = router;
