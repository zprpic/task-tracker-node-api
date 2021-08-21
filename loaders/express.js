const express = require("express");
const server = express();

const router = require("../api/routes/tasks");

server.use(express.json());
server.use("/tasks", router);

module.exports = server;
