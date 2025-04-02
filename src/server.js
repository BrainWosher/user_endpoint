const { connectDB, getDB } = require('./database/db');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const v1UserRouter = require('./v1/routes/userRoutes');

const app = express();
const PORT = 3000;

//Middleware для парсинга JSON
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const { name, surname, email } = req.body;

    if (!name || !surname || !email) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }

    const newUser = {
      id: uuidv4(),
      name,
      surname,
      email,
      createdDate: new Date(),
    };

    const db = getDB();

    await db.collection('users').insertOne(newUser);
    return res.status(201).json({ message: 'Пользователь создан', id: newUser.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const db = getDB();

    const users = await db
      .collection('users')
      .find({}, { projection: { _id: 0 } })
      .toArray();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Не найдено' });
});

//запуск
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });
};
startServer();
