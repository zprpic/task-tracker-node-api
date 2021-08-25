const Task = require("../models/Task");

const getAllTasks = async () => await Task.find({});

const getTask = async (id) => {
  try {
    const task = await Task.find({ _id: id });
    return task;
  } catch (error) {
    return undefined;
  }
};

const createTask = async (task) => {
  try {
    const task = await Task.create(task);
    return task;
  } catch (error) {
    return undefined;
  }
};

const deleteTask = async (id) => {
  try {
    const task = await Task.deleteOne({ _id: id });
    return task;
  } catch (error) {
    return undefined;
  }
};

const updateTask = async (id, name, isCompleted) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: id },
      { name, isCompleted },
      {
        new: true,
        runValidators: true,
      }
    );
    return task;
  } catch (error) {
    return undefined;
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
