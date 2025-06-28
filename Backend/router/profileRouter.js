const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers');
const authMiddleware = require('../middlewares/authMiddleware');

// All profile routes require authentication
router.use(authMiddleware);

// Profile routes
router.get('/', profileController.getProfile);
router.put('/', profileController.updateProfile);
router.put('/change-password', profileController.changePassword);
router.delete('/', profileController.deleteAccount);

// Public route to get consultants (but still requires auth to access)
router.get('/consultants', profileController.getConsultants);

console.log('Profile routes loaded');

module.exports = router;