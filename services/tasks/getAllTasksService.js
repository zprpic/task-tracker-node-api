const Task = require("../../models/Task");

const getAllTasksService = async () => await Task.find({});

module.exports = getAllTasksService;
