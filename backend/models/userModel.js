const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'First Name is required'],
        maxLength: 32
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.w{2,3})+$/, 'Please add a valid Email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: [6, 'Passport must have at least (6) characters'],
    },

    role: {
        type: String,
        default: 'user'
    }
});

module.exports = mongoose.model('user', userSchema);