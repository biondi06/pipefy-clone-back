const express = require('express');
const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  // Lógica para salvar a tarefa no banco de dados (exemplo simples)
  const newTask = { title, description };
  res.json(newTask);
});

// Rota para o relatório de tarefas
router.get('/tasks/report', (req, res) => {
  const report = [
    { title: 'Tarefa 1', count: 10 },
    { title: 'Tarefa 2', count: 5 },
    { title: 'Tarefa 3', count: 7 },
  ];
  res.json(report);
});

module.exports = router;
