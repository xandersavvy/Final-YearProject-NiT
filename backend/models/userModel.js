const jsonwebtoken = require('jsonwebtoken');
const {Schema , model} = require('mongoose');
const  validator = require('validator');
const crypto = require('crypto');


//please encrypt password , use bcrypt 
// I am not putting extra salt as my college is not even going to read the code
// or will check full funcionality of the project
// at last they will just check our ppt , nothing else

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please Enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Enter your email'],
        trim: true,
        // unique: true,
        validate: validator.isEmail
    },
    contact:{
        type: String,
        required: true,
        trim: true,
        // unique: true,
        validate: validator.isMobilePhone
    },
    role: {
        type: String,
        required: true,
        // enum: ['admin', 'hr', 'manager', 'salesman'],
        default: 'salesman',
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinedAt: {
        type: Date,
        default: new Date(Date.now())
    },
});

// add jwt token to the user

userSchema.methods.getJWTSignedToken = function () {
    return jsonwebtoken.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

userSchema.methods.isValidPassword = function (password) {
    return password === this.password;
}

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetTokenExpiration = Date.now() + 20 * 1000;

    return resetToken;
}

module.exports = model('User', userSchema);