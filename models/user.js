const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definindo o modelo de Usuário
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

module.exports = User;
