const Task = require("../models/Task");

const getAllTasks = async () => await Task.find({});

const createTask = async (task) => await Task.create(task);

module.exports = { getAllTasks, createTask };
