const { deleteTaskService } = require("../../services/index");
const { checkForErrors } = require("../helpers/index");

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await deleteTaskService(id);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = deleteTask;
