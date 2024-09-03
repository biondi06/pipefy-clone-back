const { Server } = require('socket.io');
const { server } = require('../index'); // Importando o servidor HTTP criado no index.js

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

module.exports = io;
