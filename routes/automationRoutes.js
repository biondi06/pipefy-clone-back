const express = require('express');
const { authMiddleware } = require('./authRoutes');
const Automation = require('../models/Automation');

const router = express.Router();

router.use(authMiddleware);

router.get('/automations', async (req, res) => {
  const automations = await Automation.findAll({ where: { userId: req.user } });
  res.json(automations);
});

router.post('/automations', async (req, res) => {
  const { name, triggers, actions } = req.body;
  const automation = await Automation.create({ name, triggers, actions, userId: req.user });
  res.status(201).json(automation);
});

// Outras rotas (PUT, DELETE) seguem o mesmo padrão

module.exports = router;
