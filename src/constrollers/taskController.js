const { v4: uuidv4 } = require('uuid');
const taskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskService.getAllTasks();
    res.status(200).json(allTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};
const getOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await taskService.getOneTask(taskId);

    if (!task) {
      return res.status(400).json({ message: 'Задача не найден' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ' Ошибка сервера' });
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = req.body;
    const { taskTitle, taskDescription, createdBy } = task;
    if (!taskTitle || !taskDescription) {
      res.status(400).json({ message: 'Все поля обязательны' });
    }

    const newTask = {
      id: uuidv4(),
      taskTitle,
      taskDescription,
      createdBy,
      createdDate: new Date(),
    };

    await taskService.createNewTask(newTask);

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatingData = req.body;

    if (!updatingData) {
      res.status(400).json({ message: 'Нечего обновлять' });
    }

    await taskService.updateOneTask(ObjectId(taskId), updatingData);

    res.status(200).json({ message: 'Данные задачи обновлены' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await taskService.deleteOneTask(taskId);

    if (!task) {
      return res.status(400).json({ message: 'Задача не найден' });
    }

    res.status(200).json({ message: 'Задача удалена' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateOneTask,
  deleteOneTask,
};
