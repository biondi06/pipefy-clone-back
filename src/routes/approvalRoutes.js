const express = require('express');
const router = express.Router();

let approvals = []; // Armazenamento temporário de aprovações

// Endpoint para criar nova aprovação
router.post('/approval', (req, res) => {
  const { title, description } = req.body;
  const newApproval = {
    id: Date.now(),
    title,
    description,
    status: 'Pendente',
  };
  approvals.push(newApproval);
  res.status(201).json(newApproval);
});

module.exports = router;
