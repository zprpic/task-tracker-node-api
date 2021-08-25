const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    message:
      err.message ||
      "INTERVAL SERVER ERROR: Something went wrong try again later",
  };
  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

module.exports = errorHandler;
