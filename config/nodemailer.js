const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'daniel.biondi@thomazalves.com.br',
    pass: '53534125@Pb'
  }
});

module.exports = transporter;
