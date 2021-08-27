const { getAllTasksService } = require("../../services/index");
const { checkForTasks } = require("../helpers/index");

const getAllTasks = async (req, res) => {
  const tasks = await getAllTasksService();
  const tasksChecked = checkForTasks(tasks);
  return tasksChecked;
};

module.exports = getAllTasks;
