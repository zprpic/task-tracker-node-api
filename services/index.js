const getAllTasksService = require("./tasks/GetAllTasksService");
const getTaskService = require("./tasks/GetTaskService");
const createTaskService = require("./tasks/createTaskService");
const updateTaskService = require("./tasks/updateTaskService");
const deleteTaskService = require("./tasks/deleteTaskService");

module.exports = {
  getAllTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
