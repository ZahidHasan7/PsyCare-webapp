const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import the database connection

const User = sequelize.define('User', {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  specialization: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'User',
});

module.exports = User;