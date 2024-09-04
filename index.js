const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/api', reportRoutes);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id);

  // Enviar uma notificação a todos os clientes
  socket.on('updateTask', (task) => {
    io.emit('taskUpdated', task);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
