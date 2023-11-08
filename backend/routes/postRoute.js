const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { createdPost } = require('../controllers/postController');

//Blog Routes
router.post('/post/create', isAuthenticated, isAdmin, createdPost);

module.exports = router;