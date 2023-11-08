const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfle } = require('../controllers/authController');

//Auth Routes
// - /api/signup
router.post('/signup', signup);
// - /api/signin
router.post('/signin', signin);
// - /api/logout
router.get('/logout', logout);
// - /api/me
router.get('/me', userProfle);

module.exports = router;