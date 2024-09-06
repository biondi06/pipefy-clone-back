// backend/webhook.js
const axios = require('axios');

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/your/webhook/url';

// Função para enviar uma notificação para o Slack
const sendSlackNotification = async (task) => {
  await axios.post(SLACK_WEBHOOK_URL, {
    text: `Nova tarefa criada: ${task.title} - Status: ${task.status}`
  });
};

// Ao criar uma tarefa
app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  sendSlackNotification(newTask);  // Enviando notificação ao Slack
  res.status(201).json(newTask);
});
