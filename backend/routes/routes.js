const userRoute = require('./user_route');
const todoRoute = require('./todo_route');

function setRoutes(app) {
  app.use('/user', userRoute);
  app.use('/todo', todoRoute);
}

module.exports = {
  setRoutes,
};
