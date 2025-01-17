const sequelize = require('../database'); // Import the database connection
const User = require('./user');

// Add other models here as needed

module.exports = {
  sequelize,
  User,
  // Export other models
};