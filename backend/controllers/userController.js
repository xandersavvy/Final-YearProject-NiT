const { normalError, asyncError } = require('../middleware/error');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/sendToken');
const ApiFeatures = require('../utils/apiFeatures');


exports.registerUser = asyncError(async (req, res, next) => {
    const { name, email, contact, password, role } = req.body;
    
    
    const newUser = await User.create({
        name , email , contact , role
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


//general authenticated routes
exports.logoutUser = asyncError(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    }).status(200).json({
        success: true,
        data: {}
    });
});

exports.updatePassword = asyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    if(!user) ErrorHandler('User not found', 404);
    // //check current password
    // const isPasswordMatch = await user.correctPassword(req.body.currentPassword);
    // if(!isPasswordMatch) return next(new errorHandler('Current password is incorrect',400));
    // //check if new password is same as current password
    // if(req.body.newPassword === req.body.currentPassword) return next(new errorHandler('New password must be different from current password'));
    // //set new password
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);
});




//Hr Things
exports.getSingleuser = asyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user) ErrorHandler('User not found', 404);
    res.status(200).json({
        success: true,
        data: user
    });
});

exports.getAllUsers = asyncError(async (req, res, next) => {
    const userCount = await User.countDocuments();
    // const users = await User.find().select('-password');
    const apiFeatures = new ApiFeatures(User , req.query).filter().sort()
                                                        .paginate()
                                                        .searchByName()
                                                        .searchByEmail();
    
    const users = await apiFeatures.query;
    const pagedUsers = users.length;
    // const user = await User.find({});
    res.status(200).json({
        success: true,
        data: users,
        count: userCount,
        pagedUsers
    });
});


exports.updateRoleHr = asyncError(async (req, res, next) => {
    if(req.body.role === "admin") return next(new ErrorHandler('Admin cannot be updated', 400));
    const user = await User.findByIdAndUpdate(req.params.id, {
        role: req.body.role
    }, {
        new: true
    });
    if(!user) ErrorHandler('User not found', 404);
    res.status(200).json({
        success: true,
        data: {}
    });
})



// admin things


exports.deleteUser = asyncError(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) ErrorHandler('User not found', 404);
    res.status(204).json({
        success: true,
        data: {}
    });
})





exports.updateEmployeeInformation = asyncError( async(req,res,next) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        role: req.body.role
    }, {
        new: true
    });
    if(!user) ErrorHandler('User not found', 404);
    res.status(200).json({
        success: true,
        data: {}
    });
})

exports.getSingleEmployee = asyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user) ErrorHandler('Employee not found', 404);
    res.status(200).json({
        success: true,
        data: user
    });
})
//please please please don't implemennt this function ever

exports.getEmployeePassword = asyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id).select('+password');
    if(!user) ErrorHandler('User not found', 404);
    res.status(200).json({
        success: true,
        data: {
            password: user.password
        }
    });
})

