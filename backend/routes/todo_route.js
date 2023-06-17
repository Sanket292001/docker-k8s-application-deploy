const express = require("express");
const todoController = require("../controllers/controllers");
const todoRoute = express.Router();

todoRoute.get("/", async (req, res) => {
  res.json({
    msg: "TODO GET Route",
    resp: await todoController.todo.getTodos(),
  });
});

todoRoute.post("/", async (req, res) => {
  const name = req.body.name;
  console.log("Name: ", name);
  res.json({
    msg: "TODO POST Route",
    resp: await todoController.todo.addTodo(name),
  });
});

module.exports = todoRoute;
