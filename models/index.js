 
// const sequelize = require('../database');
// const User = require('./user');
// const Post = require('./post'); // Add this line

// module.exports = {
//   sequelize,
//   User,
//   Post, // Add this line
//   // Export other models
// };
const sequelize = require('../database');
const User = require('./user');
const Post = require('./post');
const ConsultantsAdvice = require('./consultantsAdvice');

module.exports = {
  sequelize,
  User,
  Post,
  ConsultantsAdvice,
};