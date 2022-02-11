const { normalError, asyncError } = require('../middleware/error');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/sendToken');

exports.registerUser = asyncError(async (req, res, next) => {
    const { name, email, contact, password, role } = req.body;
    
    
    const newUser = await User.create({
        name , email , contact , password , role
    });

    if(!newUser) ErrorHandler('User not created', 400);
    sendToken(newUser, 201, res);
});

exports.loginUser = asyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) ErrorHandler('Please enter email and password', 400);


    const  user = await User.findOne({ email });
    if(!user) ErrorHandler('Invalid email or password', 401);
    const isMatch = await user.isValidPassword(password);
    if(!isMatch) ErrorHandler('Invalid email or password', 401);
    sendToken(user, 200, res);
});


exports.logoutUser = asyncError(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    }).status(200).json({
        success: true,
        data: {}
    });
});






