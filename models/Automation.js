const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Automation = sequelize.define('Automation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trigger: {
    type: DataTypes.STRING,
    allowNull: false
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Automation;
