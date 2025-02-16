const http = require('http');
const { connectDB, getDB } = require('./db');
const { log } = require('console');

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/users') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const user = JSON.parse(body);
        const { name, surname, email } = user;

        if (!name || !surname || !email) {
          res.writeHead(400, { 'Connection-Type': 'application/json' });
          return res.end(JSON.stringify({ message: 'Все поля обязательны' }));
        }
        const db = getDB();
        await db.collection('users').insertOne(user);

        res.writeHead(201, { 'Connection-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Пользователь создан' }));
      } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Connection-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Ошибка сервера' }));
      }
    });
  } else {
    res.writeHead(404, { 'Connection-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Не найдено' }));
  }
});

//запуск
const startServer = async () => {
  await connectDB();
  server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
  });
};
startServer();
