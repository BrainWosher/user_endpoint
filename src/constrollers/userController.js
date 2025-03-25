const userService = require('../services/userService');

const getAllUsers = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.send('Get all users');
};
const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send('Get an existing User');
};

const createNewUser = (req, res) => {
  const createdUser = userService.createNewUser();
  res.send('Create a new User');
};

const updateOneUser = (req, res) => {
  const updateUser = userService.updateOneUser();
  res.send('Update an existing User');
};

const deleteOneUser = (req, res) => {
  userService.deleteOneUser();
  res.send('Delete an existing User');
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
