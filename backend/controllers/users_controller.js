const models = require("../models/models");

async function getUsers() {
  try {
    return await models.user.find({});
  } catch (err) {
    return err.message;
  }
}

async function addUser(name, email) {
  try {
    const newUser = new models.user({
      name: name,
      email: email,
    });
    return await newUser.save();
  } catch (err) {
    return err.message;
  }
}

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
};
