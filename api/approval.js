// Exemplo de código Node.js/Express para aprovações

app.get('/api/approval', (req, res) => {
    const approvals = [
      { id: 1, title: 'Aprovação 1', description: 'Descrição da aprovação 1', status: 'Pendente' },
      { id: 2, title: 'Aprovação 2', description: 'Descrição da aprovação 2', status: 'Aprovado' },
    ];
    res.json(approvals);
  });
  