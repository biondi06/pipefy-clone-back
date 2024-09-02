const express = require('express');
const router = express.Router();

// Dados de exemplo (em uma aplicação real, você usaria um banco de dados)
let users = [
  { id: 1, username: 'john_doe', email: 'john@example.com' },
  { id: 2, username: 'jane_doe', email: 'jane@example.com' }
];

// Rota GET para obter todos os usuários
router.get('/users', (req, res) => {
  res.json(users);
});

// Rota POST para criar um novo usuário
router.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Rota PUT para atualizar um usuário existente
router.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Rota DELETE para deletar um usuário
router.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted' });
});

module.exports = router;
