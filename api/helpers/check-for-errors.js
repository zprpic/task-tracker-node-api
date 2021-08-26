const prepareErrorMessage = require("./prepare-error-message");

function checkForErrors(task) {
  const { value, name } = task;
  if (name) {
    const error = prepareErrorMessage(name, value);
    return error;
  } else {
    return undefined;
  }
}

module.exports = checkForErrors;
