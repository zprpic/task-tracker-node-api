const { getTask } = require("../../services/tasks");
const { checkForErrors } = require("../helpers/index");

const getTaskRoute = async (req, res) => {
  const { id } = req.params;
  const task = await getTask(id);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = getTaskRoute;
