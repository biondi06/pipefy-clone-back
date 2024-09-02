const express = require('express');
const { authMiddleware } = require('./authRoutes');
const authorize = require('../middleware/authorization');
const Task = require('../models/Task');
const transporter = require('../config/nodemailer');
const { io } = require('../index');
const logger = require('../config/logger');

const router = express.Router();

router.use(authMiddleware);

router.post('/tasks', authorize('tasks', 'create'), async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description, userId: req.user });

  // Registrar log
  logger.info(`Nova tarefa criada: ${title} por usuário ${req.user}`);

  // Emitir evento e enviar email
  io.emit('taskCreated', { title, description });
  const mailOptions = {
    from: 'daniel.biondi@thomazalves.com.br',
    to: 'daniel.biondi@thomazalves.com.br',
    subject: 'Nova Tarefa Criada',
    text: `Uma nova tarefa foi criada: ${title}\n\nDescrição: ${description}`
  };
  transporter.sendMail(mailOptions);

  res.status(201).json(task);
});

module.exports = router;
