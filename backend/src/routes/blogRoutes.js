const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authenticate = require('../middlewares/auth');

// Route to save a draft
router.post('/draft', blogController.saveDraft);

// Route to publish a blog
router.post('/publish', blogController.publishBlog);

// Route to get all blogs
router.get('/', blogController.getAllBlogs);

// Route to get a specific blog by ID
router.get('/:id', blogController.getBlogById);

module.exports = router;