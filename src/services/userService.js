const { getDB } = require('../database/db');

const getAllUsers = async () => {
  const db = getDB();

  return db
    .collection('users')
    .find({}, { projection: { _id: 0 } })
    .toArray();
};

const getOneUser = () => {
  return;
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

const deleteOneUser = () => {
  return;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
