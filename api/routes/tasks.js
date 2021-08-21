const express = require("express");
const router = express.Router();

const { getAllTasks, createTask } = require("../../services/tasks");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);

module.exports = router;
