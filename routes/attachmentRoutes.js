const express = require('express');
const { authMiddleware } = require('./authRoutes');
const Attachment = require('../models/Attachment');
const upload = require('../config/multer');

const router = express.Router();

router.use(authMiddleware);

// Upload de anexo
router.post('/tasks/:taskId/attachments', upload.single('file'), async (req, res) => {
  const { taskId } = req.params;
  const file = req.file;

  const attachment = await Attachment.create({
    fileName: file.originalname,
    filePath: file.path,
    taskId,
  });

  res.status(201).json(attachment);
});

// Listar anexos de uma tarefa
router.get('/tasks/:taskId/attachments', async (req, res) => {
  const { taskId } = req.params;

  const attachments = await Attachment.findAll({ where: { taskId } });
  res.json(attachments);
});

module.exports = router;
