const express = require('express');
const { authMiddleware } = require('./authRoutes');
const Comment = require('../models/Comment');

const router = express.Router();

router.use(authMiddleware);

// Criar um comentário
router.post('/tasks/:taskId/comments', async (req, res) => {
  const { taskId } = req.params;
  const { content } = req.body;
  const userId = req.user;

  const comment = await Comment.create({ content, userId, taskId });
  res.status(201).json(comment);
});

// Listar comentários de uma tarefa
router.get('/tasks/:taskId/comments', async (req, res) => {
  const { taskId } = req.params;

  const comments = await Comment.findAll({ where: { taskId } });
  res.json(comments);
});

module.exports = router;
