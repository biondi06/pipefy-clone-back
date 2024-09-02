const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Automation = sequelize.define('Automation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  triggers: {
    type: DataTypes.ARRAY(DataTypes.STRING),  // Suporta múltiplos gatilhos
    allowNull: false
  },
  actions: {
    type: DataTypes.ARRAY(DataTypes.STRING),  // Suporta múltiplas ações
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Automation;
