const express = require('express');
const router = express.Router();

// Rota para criar um formulário
router.post('/forms', (req, res) => {
  const { title, description } = req.body;
  
  // Lógica para salvar o formulário no banco de dados
  const newForm = { title, description };
  
  res.json({ message: 'Formulário enviado com sucesso!', form: newForm });
});

module.exports = router;
