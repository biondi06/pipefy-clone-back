const express = require('express');
const { authMiddleware } = require('./authRoutes');
const Task = require('../models/Task');

const router = express.Router();

// Aplicar authMiddleware para proteger as rotas
router.use(authMiddleware);

router.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user } });
  res.json(tasks);
});

// Outras rotas (POST, PUT, DELETE) seguem o mesmo padrão

module.exports = router;
