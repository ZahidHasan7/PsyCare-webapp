const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Subscription = sequelize.define('Subscription', {
  subscription_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  consultant_id: { type: DataTypes.INTEGER, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
  plan: { type: DataTypes.ENUM('basic', 'standard', 'premium'), allowNull: false },
}, {
  timestamps: false,
  tableName: 'Subscriptions',
});

module.exports = Subscription;