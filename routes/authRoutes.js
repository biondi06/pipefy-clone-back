const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const oauth2Client = require('../config/googleAuth');

const router = express.Router();

router.get('/auth/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
  });
  res.redirect(url);
});

router.get('/auth/google/callback', async (req, res) => {
  const { tokens } = await oauth2Client.getToken(req.query.code);
  oauth2Client.setCredentials(tokens);

  const oauth2 = google.oauth2({
    auth: oauth2Client,
    version: 'v2',
  });

  oauth2.userinfo.get(async (err, response) => {
    if (err) {
      return res.status(400).json({ error: 'Erro ao obter informações do usuário' });
    }

    const { email, name } = response.data;
    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({ name, email, role: 'user' });
    }

    const token = jwt.sign({ id: user.id }, 'secreto', { expiresIn: '1h' });
    res.redirect(`/dashboard?token=${token}`);
  });
});

module.exports = router;
