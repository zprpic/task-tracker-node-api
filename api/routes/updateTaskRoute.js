const { updateTask } = require("../../services/tasks");
const { checkForErrors } = require("../helpers/index");

const updateTaskRoute = async (req, res) => {
  const { id } = req.params;
  const { name, isCompleted } = req.body;
  const task = await updateTask(id, name, isCompleted);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = updateTaskRoute;
