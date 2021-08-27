const Task = require("../models/Task");

const createTaskService = async (task) => {
  try {
    const newTask = await Task.create(task);
    return newTask;
  } catch (error) {
    return error;
  }
};

module.exports = createTaskService;
