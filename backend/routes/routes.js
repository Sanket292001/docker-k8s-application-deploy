const user_route = require("./user_route");
const todo_route = require("./todo_route");

function setRoutes(app) {
  app.use("/user", user_route);
  app.use("/todo", todo_route);
}

module.exports = {
  setRoutes: setRoutes,
};
