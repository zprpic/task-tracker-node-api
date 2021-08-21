const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../../services/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
