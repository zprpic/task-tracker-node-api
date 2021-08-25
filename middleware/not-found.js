const notFound = (req, res) => {
  res.status(404).send("404: Nothing found!");
};

module.exports = notFound;
