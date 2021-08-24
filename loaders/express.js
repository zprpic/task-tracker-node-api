const express = require("express");
const server = express();

const router = require("../api/routes/tasks");
const customAPIError = require("../errors/custom-error");

server.use(express.json());
server.use("/tasks", router);
server.use(customAPIError);
module.exports = server;
