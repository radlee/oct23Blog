const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfle } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

//Auth Routes
// - /api/signup
router.post('/signup', signup);
// - /api/signin
router.post('/signin', signin);
// - /api/logout
router.get('/logout', logout);
// - /api/me
router.get('/me', isAuthenticated, userProfle);

module.exports = router;