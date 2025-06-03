const { connectDB, getDB } = require('./database/db');
const express = require('express');
const v1TaskRouter = require('./v1/routes/taskRoutes');

const app = express();
const PORT = 3000;

//Middleware для парсинга JSON
app.use(express.json());
app.use('/api/v1/tasks', v1TaskRouter);

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
