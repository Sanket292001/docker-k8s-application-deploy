const userController = require("./users_controller");
const todoController = require("./todo_controller");

module.exports = {
  user: userController,
  todo: todoController,
};
