const express = require("express");
const router = express.Router();

const { routeHandler } = require("./helpers/index");

const {
  getAllTasksRoute,
  getTaskRoute,
  createTaskRoute,
  updateTaskRoute,
  deleteTaskRoute,
} = require("./routes/index");

router
  .route("/")
  .get(routeHandler(getAllTasksRoute))
  .post(routeHandler(createTaskRoute));

router
  .route("/:id")
  .get(routeHandler(getTaskRoute))
  .patch(routeHandler(updateTaskRoute))
  .delete(routeHandler(deleteTaskRoute));

module.exports = router;
