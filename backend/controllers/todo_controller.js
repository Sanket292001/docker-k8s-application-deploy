const models = require('../models/models');

async function getTodos() {
  try {
    return await models.Todo.find({});
  } catch (err) {
    return err.message;
  }
}

async function addTodo(name) {
  try {
    const newTodo = new models.Todo({
      name,
      deleted: false,
    });
    return await newTodo.save();
  } catch (err) {
    return err.message;
  }
}

module.exports = {
  getTodos,
  addTodo,
};
