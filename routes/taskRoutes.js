const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticação
const transporter = require('../config/nodemailer');
const io = require('../config/io'); // WebSocket

const router = express.Router();

router.use(authMiddleware); // Aplicando o middleware de autenticação em todas as rotas

// Criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    io.emit('taskCreated', task);

    const mailOptions = {
      from: 'daniel.biondi@thomazalves.com.br',
      to: 'destinatario@dominio.com',
      subject: 'Nova Tarefa Criada',
      text: `Uma nova tarefa foi criada: ${task.title}\n\nDescrição: ${task.description}`
    };

    transporter.sendMail(mailOptions);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
});

// Outras rotas...

module.exports = router; // Certifique-se de exportar corretamente o router
