const { getDB } = require('../database/db');

const getAllUsers = async () => {
  const db = getDB();

  return db
    .collection('users')
    .find({}, { projection: { _id: 0 } })
    .toArray();
};

const getOneUser = async (userId) => {
  const db = getDB();
  const user = await db.collection('users').findOne({ _id: userId });
  return user; //крашится при запросе
};

const createNewUser = async (newUser) => {
  const db = getDB();
  await db.collection('users').insertOne(newUser);
};

const updateOneUser = async (userId, updatingData) => {
  const db = getDB();
  await db.collection('users').updateOne({ _id: userId }, { $set: updatingData });
  return;
};

const deleteOneUser = async (userId) => {
  const db = getDB();

  return db.collection('users').deleteOne({ _id: userId });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
