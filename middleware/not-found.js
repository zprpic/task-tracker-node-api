const notFound = (req, res) => {
  res.status(404).json("404: Not found!");
};

module.exports = notFound;
