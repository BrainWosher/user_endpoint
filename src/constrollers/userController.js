const getAllUsers = (req, res) => {
  res.send('Get all users');
};
const getOneUser = (req, res) => {
  res.send('Get an existing User');
};

const createNewUser = (req, res) => {
  res.send('Create a new User');
};

const updateOneUser = (req, res) => {
  res.send('Update an existing User');
};

const deleteOneUser = (req, res) => {
  res.send('Delete an existing User');
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
