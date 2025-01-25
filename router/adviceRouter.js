const express = require('express');
const router = express.Router();
//const adviceController = require('../controllers/adviceController');
const adviceController = require('../controllers/adviceControllers');
// Create a new advice
router.post('/', adviceController.createAdvice);

// Get all advice
router.get('/', adviceController.getAllAdvice);

// Get advice by ID
router.get('/:id', adviceController.getAdviceById);

// Update advice
router.put('/:id', adviceController.updateAdvice);

// Delete advice
router.delete('/:id', adviceController.deleteAdvice);

module.exports = router;