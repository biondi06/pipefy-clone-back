const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('nome_do_banco_de_dados', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql', 'sqlite', 'mariadb', etc.
  logging: false       // Desabilitar logs SQL no console
});

module.exports = sequelize;
