const express = require('express');
const controller = require('../controllers/controllers');

const userRoute = express.Router();

userRoute.get('/', async (req, res) => {
  res.json({ msg: 'User GET Route', data: await controller.user.getUsers() });
});

userRoute.post('/', async (req, res) => {
  res.json({
    msg: 'User POST Route',
    data: await controller.user.addUser(req.body.name, req.body.email),
  });
});

module.exports = userRoute;
