const { createTaskService } = require("../../services/index");
const { checkForErrors } = require("../helpers/index");

const createTask = async (req, res) => {
  const task = await createTaskService(req.body);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = createTask;
