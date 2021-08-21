const express = require("./express");
const config = require("./config");
const connectDB = require("./connect");

const databaseURL = config.databaseURL;
const port = config.port;

const connect = () => {
  connectDB(databaseURL);
};

const app = () => {
  express.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
};

module.exports = {
  connect,
  app,
};
