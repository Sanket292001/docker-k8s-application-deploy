const models = require('../models/models');

async function getUsers() {
  try {
    return await models.User.find({});
  } catch (err) {
    return err.message;
  }
}

async function addUser(name, email) {
  try {
    const newUser = new models.User({
      name,
      email,
    });
    return await newUser.save();
  } catch (err) {
    return err.message;
  }
}

module.exports = {
  getUsers,
  addUser,
};
