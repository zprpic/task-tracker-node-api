function checkForTasks(tasks) {
  if (tasks.length > 0) {
    return tasks;
  } else {
    return "There are no tasks at the moment";
  }
}

module.exports = checkForTasks;
