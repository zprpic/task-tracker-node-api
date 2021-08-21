const server = require("./express");
const { databaseURL, port } = require("./config");
const connectDB = require("./connect");

const connect = () => {
  connectDB(databaseURL);
};

const app = () => {
  server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
};

module.exports = {
  connect,
  app,
};
