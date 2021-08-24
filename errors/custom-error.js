const customAPIError = (message) => {
  return res.json(message);
};

module.exports = customAPIError;
