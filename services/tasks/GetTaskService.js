const Task = require("../../models/Task");

const getTaskService = async (id) => {
  try {
    const task = await Task.findById({ _id: id });
    return task;
  } catch (error) {
    return error;
  }
};

module.exports = getTaskService;
