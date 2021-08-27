const { getTaskService } = require("../../services/index");
const { checkForErrors } = require("../helpers/index");

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await getTaskService(id);
  const error = checkForErrors(task);
  if (error) {
    return error;
  } else {
    return task;
  }
};

module.exports = getTask;
