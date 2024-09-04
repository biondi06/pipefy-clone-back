const express = require('express');
const router = express.Router();

// Dados mockados para o exemplo
router.get('/tasks/stats', (req, res) => {
  const stats = {
    completed: 10,
    pending: 5,
    inProgress: 3,
  };
  res.json(stats);
});

router.get('/automations/stats', (req, res) => {
  const stats = {
    active: 4,
    inactive: 2,
  };
  res.json(stats);
});

module.exports = router;
