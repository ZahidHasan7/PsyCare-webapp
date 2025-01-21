const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Ensure this path is correct

const Post = sequelize.define('Post', {
  problem_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  topic: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: false,
  tableName: 'Post',
});

module.exports = Post;