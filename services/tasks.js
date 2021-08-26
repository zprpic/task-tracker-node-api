const Task = require("../models/Task");

const getAllTasks = async () => await Task.find({});

const getTask = async (id) => {
  try {
    const task = await Task.find({ _id: id });
    return task;
  } catch (error) {
    return error;
  }
};

const createTask = async (task) => {
  try {
    const newTask = await Task.create(task);
    return newTask;
  } catch (error) {
    return error;
  }
};

const deleteTask = async (id) => {
  try {
    const task = await Task.deleteOne({ _id: id });
    return task;
  } catch (error) {
    return error;
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
    return error;
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
