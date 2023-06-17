const models = require("../models/models");

async function getTodos() {
  try {
    return await models.todo.find({});
  } catch (err) {
    return err.message;
  }
}

async function addTodo(name) {
  try {
    const newTodo = new models.todo({
      name: name,
      deleted: false,
    });
    return await newTodo.save();
  } catch (err) {
    return err.message;
  }
}

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo,
};
