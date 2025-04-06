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

const createNewUser = async () => {
  const db = getDB();
  const newUser = {
    id: uuidv4(),
    name,
    surname,
    email,
    createdDate: new Date(),
  };
  await db.collection('users').insertOne(newUser);
  return newUser;
};

const updateOneUser = () => {
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
