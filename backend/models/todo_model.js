// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    name: { type: String, required: true },
    deleted: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
