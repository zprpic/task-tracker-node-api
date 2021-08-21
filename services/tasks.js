const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const { name } = req.body;
  await Task.create({ name });
  res.status(200).json(`Task: ${name} has been created.`);
};

module.exports = { getAllTasks, createTask };
