const { DataTypes } = require('sequelize');
const sequelize = require('../database');
 
const ConsultantsAdvice = sequelize.define('ConsultantsAdvice', {
  advice_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  problem_id: { type: DataTypes.INTEGER, allowNull: false },
  consultant_id: { type: DataTypes.INTEGER, allowNull: false },
  advice_text: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: false,
  tableName: 'Consultants_Advice',
});

module.exports = ConsultantsAdvice;