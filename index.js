const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const formRoutes = require('./routes/formRoutes');  // Importando as rotas de formulário

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);
app.use('/api', formRoutes);  // Usando as rotas de formulário

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
