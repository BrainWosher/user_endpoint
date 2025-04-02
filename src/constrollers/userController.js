const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};
const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send('Get an existing User');
};

const createNewUser = async (req, res) => {
  try {
    const user = req.body;
    const { name, surname, email } = user;
    if (!name || !surname || !email) {
      res.status(400).json({ message: 'Все поля обязательны' });
    }
    const newUser = await userService.createNewUser(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
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
