const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

//Auth Routes
// - /api/signup
router.post('/signup', signup);
// - /api/signin
router.post('/signin', signin);

module.exports = router;