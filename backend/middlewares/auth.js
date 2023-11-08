const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//Check if user is authenticated 
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    //make sure token exists
    if(!token) {
        return next(new ErrorResponse('Login required..', 401));
    }

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findByid(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('You must login', 401))
    }
}