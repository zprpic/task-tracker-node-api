const Task = require("../../models/Task");

const updateTaskService = async (id, name, isCompleted) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: id },
      { name, isCompleted },
      {
        new: true,
        runValidators: true,
      }
    );
    return task;
  } catch (error) {
    return error;
  }
};

module.exports = updateTaskService;
