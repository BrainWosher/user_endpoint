const { v4: uuidv4 } = require('uuid');
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
const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getOneUser(userId);

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ' Ошибка сервера' });
  }
};

const createNewUser = async (req, res) => {
  try {
    const user = req.body;
    const { name, surname, email } = user;
    if (!name || !surname || !email) {
      res.status(400).json({ message: 'Все поля обязательны' });
    }

    const newUser = {
      id: uuidv4(),
      name,
      surname,
      email,
      createdDate: new Date(),
    };

    await userService.createNewUser(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatingData = req.body;

    if (!updatingData) {
      res.status(400).json({ message: 'Данные для обновления обязательны' });
    }

    await userService.updateOneUser(ObjectId(userId), updatingData);

    res.status(200).json({ message: 'Данные пользователя обновлены' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.deleteOneUser(userId);

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    res.status(200).json({ message: 'Пользователь удален' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
