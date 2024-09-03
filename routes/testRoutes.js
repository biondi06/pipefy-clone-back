const express = require('express');
const router = express.Router();
const transporter = require('../config/nodemailer');

router.get('/send-test-email', async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: 'daniel.biondi@thomazalves.com.br', // Remetente
      to: 'destinatario@dominio.com', // Destinatário (substitua pelo email real)
      subject: 'Teste de Envio de Email',
      text: 'Este é um email de teste usando nodemailer!',
    });

    res.status(200).json({ message: 'Email enviado!', info });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar o email', details: error.message });
  }
});

module.exports = router;
