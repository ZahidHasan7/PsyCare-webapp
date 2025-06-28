require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models'); // Ensure this path is correct
const userRoutes = require('./router/userRouter'); // Ensure this path is correct
const postRoutes = require('./router/postRouter');
const adviceRoutes = require('./router/adviceRouter');
const subscriptionRoutes = require('./router/subscriptionRouter');
const authRoutes = require('./router/authRouter'); // Add this line
const profileRoutes = require('./router/profileRouter');
 
const app = express();
app.use(express.json());
app.use('/profile', profileRoutes);

// Auth routes (add this line)
app.use('/auth', authRoutes);

app.use('/users', userRoutes);

app.use('/posts', postRoutes);
app.use('/advice', adviceRoutes);
app.use('/subscriptions', subscriptionRoutes);
// Register other routes similarly
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
});