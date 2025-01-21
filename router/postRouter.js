const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const { getAllPosts, getPostById } = require('../controllers/postControllers');


// Create a new post
router.post('/', postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a post by ID
router.get('/:id', postController.getPostById);

// Update a post
router.put('/:id', postController.updatePost);

// Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;
 
// Define routes
 
