const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_KEY,
    api_scret: process.env.CLOUD_KEY_SECRET
});

module.exports = cloudinary;