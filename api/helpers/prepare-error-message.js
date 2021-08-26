const { NotFoundError, BadRequestError } = require("../../errors/index");

function prepareErrorMessage(name, value) {
  if (name === "CastError") {
    const error = new NotFoundError(`No task with id: ${value} not found`);
    return error;
  }
  if (name === "ValidationError") {
    const error = new BadRequestError(
      `Task name must be between 10-30 characters`
    );
    return error;
  }
}

module.exports = prepareErrorMessage;
