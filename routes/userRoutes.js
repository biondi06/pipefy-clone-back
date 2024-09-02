const express = require('express');
const router = express.Router();

// Simulação de dados de usuários
const users = [
  { id: 1, username: 'john_doe', email: 'john@example.com' },
  { id: 2, username: 'jane_doe', email: 'jane@example.com' }
];

// Rota GET /api/users - Retorna todos os usuários
router.get('/users', (req, res) => {
  res.json(users);
});

// Rota POST /api/users - Cria um novo usuário (adiciona ao array)
router.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Rota PUT /api/users/:id - Atualiza um usuário existente
router.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Rota DELETE /api/users/:id - Deleta um usuário
router.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
