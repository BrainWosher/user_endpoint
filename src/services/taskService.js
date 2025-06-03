const { getDB } = require('../database/db');

const getAllTasks = async () => {
  const db = getDB();

  return db
    .collection('tasks')
    .find({}, { projection: { _id: 0 } })
    .toArray();
};

const getOneTask = async (taskId) => {
  const db = getDB();
  const task = await db.collection('tasks').findOne({ _id: taskId });
  return task; //крашится при запросе
};

const createNewTask = async (newTask) => {
  const db = getDB();
  await db.collection('tasks').insertOne(newTask);
};

const updateOneTask = async (taskId, updatingData) => {
  const db = getDB();
  await db.collection('tasks').updateOne({ _id: taskId }, { $set: updatingData });
  return;
};

const deleteOneTask = async (taskId) => {
  const db = getDB();

  return db.collection('tasks').deleteOne({ _id: taskId });
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateOneTask,
  deleteOneTask,
};
