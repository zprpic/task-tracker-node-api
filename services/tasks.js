const Task = require("../models/Task");

const getAllTasks = async () => await Task.find({});

const getTask = async (id) => await Task.find({ _id: id });

const createTask = async (task) => await Task.create(task);

const deleteTask = async (id) => await Task.deleteOne({ _id: id });

const updateTask = async (id, name, isCompleted) =>
  await Task.findOneAndUpdate(
    { _id: id },
    { name, isCompleted },
    {
      new: true,
      runValidators: true,
    }
  );

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
