const { mongoose } = require("../loaders/index");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task must be named"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
