const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'user_api_db';

let db;

const connectDB = async () => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  console.log('БД подключена');
  db = client.db(dbName);
};

const getDB = () => {
  if (!db) {
    throw new Error('База не инициализирована');
  }
  return db;
};

module.exports = { connectDB, getDB };
