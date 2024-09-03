const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

// Rota de Autenticação
app.use('/api', authRoutes);

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});
