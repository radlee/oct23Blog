const User = require('../models/userModel');

const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
   try {
    const { email, password } = req.body;
    //Validation
    if(!email) {
        return next(new ErrorResponse('Please add an Email', 403))
    }
    if(!password) {
        return next(new ErrorResponse('Please add a Password', 403))
    }
    //Check User Email
    const user = await User.findOne({ email })
    if(!user){
        return next(new ErrorResponse('Invalid credentials', 400));
    }

    //Check Password
    const isMatched = await user.comparePassword(password);
    if(!isMatched) {
        return next(new ErrorResponse('Invalid Credentials', 400))
    }
    sendTokenResponse(user, 200, res);

   } catch (error) {
    next(error);
   }

}

const sendTokenResponse = async (user, codeStatus, res)=> {
    const token = await user.getJwtToken();
    res.status(codeStatus)
    .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({
        success: true,
        id: user._id,
        role: user.role
    })
}

// const { email } = req.body;
//     const userExist = await User.findOne({ email });
//     if(userExist) {
//         return next(new ErrorResponse('E-Mail already registered', 400));
//     }
//     try {
//         const user = await User.create(req.body);
//         res.status(201).json({
//             success: true,
//             user
//         })
//     } catch (error) {
//         next(error)
//     }