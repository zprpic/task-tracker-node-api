const { getAllTasks } = require("../../services/tasks");
const { checkForTasks } = require("../helpers/index");

const getAllTasksRoute = async (req, res) => {
  const tasks = await getAllTasks();
  const tasksChecked = checkForTasks(tasks);
  return tasksChecked;
};

module.exports = getAllTasksRoute;
