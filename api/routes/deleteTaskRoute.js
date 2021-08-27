const { deleteTask } = require("../../services/tasks");
const { checkForErrors } = require("../helpers/index");

const deleteTaskRoute = async (req, res) => {
  const { id } = req.params;
  const task = await deleteTask(id);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = deleteTaskRoute;
