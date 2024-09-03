const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste para o caminho correto do arquivo de configuração do banco de dados

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
