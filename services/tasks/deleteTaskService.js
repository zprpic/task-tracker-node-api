const Task = require("../../models/Task");

const deleteTaskService = async (id) => {
  try {
    const task = await Task.deleteOne({ _id: id });
    return task;
  } catch (error) {
    return error;
  }
};

module.exports = deleteTaskService;
