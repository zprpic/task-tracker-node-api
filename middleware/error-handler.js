const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong try again later",
  };
  if (err.name === "CastError") {
    customError.message = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  }
  if (err.name === "ValidationError") {
    customError.message = `Task must contain between 10 and 30 characters`;
    customError.statusCode = 400;
  }
  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

module.exports = errorHandler;
