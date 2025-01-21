// const sequelize = require('../database'); // Import the database connection
// const User = require('./user');

// // Add other models here as needed

// module.exports = {
//   sequelize,
//   User,
//   // Export other models
// };

const sequelize = require('../database');
const User = require('./user');
const Post = require('./post'); // Add this line

module.exports = {
  sequelize,
  User,
  Post, // Add this line
  // Export other models
};