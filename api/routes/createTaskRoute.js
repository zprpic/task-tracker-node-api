const { createTask } = require("./../services/tasks");
const { checkForErrors } = require("./helpers/index");

const createTaskRoute = async (req, res) => {
  const task = await createTask(req.body);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = createTaskRoute;
