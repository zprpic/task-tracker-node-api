const express = require("express");
const server = express();
const cors = require("cors");

const router = require("../api/tasks");

const errorHandler = require("../middleware/error-handler");
const notFound = require("../middleware/not-found");

server.use(cors());
server.use(express.json());
server.use("/tasks", router);
server.use("*", notFound); //order? wtF?
server.use(errorHandler); //order? vice-versa doesnt work? why?

module.exports = server;
