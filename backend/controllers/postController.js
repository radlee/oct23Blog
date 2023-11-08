const cloudinary = require('utils/cloudinary');
const Post = require('../models/postModel');
const ErrorResponse = require('../utils/errorResponse');

//Create a Post
exports.createdPost = async (req, res, next) => {
    const { title, content, postedBy, image, likes, comments } = req.body;

    try {
        //Upload image in clodinary
        const result = await cloudinary.uploader.upload(image, {
            folder: 'posts',
            width: 1200,
            crop: 'scale'
        });
        const post = await Post.create({
            title,
            content,
            postedBy: req.user._id,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });

        res.status(201).json({
            success: true,
            post
        });

    } catch (error) {
        console.log(err);
    }
}