const { connectDB, getDB } = require('./db');
const express = require('express');
const v1Router = require('./v1/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1', v1Router);

app.post('/users', async (req, res) => {
  try {
    const { name, surname, email } = req.body;

    if (!name || !surname || !email) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }

    const db = getDB();
    await db.collection('users').insertOne({ name, surname, email });
    return res.status(201).json({ message: 'Пользователь создан' });
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
