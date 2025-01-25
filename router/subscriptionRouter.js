const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionControllers');

// Create a new subscription
router.post('/', subscriptionController.createSubscription);

// Get all subscriptions
router.get('/', subscriptionController.getAllSubscriptions);

// Get a subscription by ID
router.get('/:id', subscriptionController.getSubscriptionById);

// Update a subscription
router.put('/:id', subscriptionController.updateSubscription);

// Delete a subscription
router.delete('/:id', subscriptionController.deleteSubscription);

module.exports = router;