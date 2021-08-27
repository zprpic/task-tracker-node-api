const { updateTaskService } = require("../../services/index");
const { checkForErrors } = require("../helpers/index");

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, isCompleted } = req.body;
  const task = await updateTaskService(id, name, isCompleted);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = updateTask;
