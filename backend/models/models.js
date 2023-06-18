const todoModel = require('./todo_model');
const userModel = require('./user_model');

module.exports = {
  User: userModel,
  Todo: todoModel,
};
