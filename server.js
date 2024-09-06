// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/pipefyClone', { useNewUrlParser: true, useUnifiedTopology: true });

// Definindo o modelo de Tarefa
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'Pendente' },
  dueDate: Date
});

const Task = mongoose.model('Task', TaskSchema);

// Rota para listar todas as tarefas
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
