module.exports = (user , statusCode , res) => {
    const token = user.getJWTSignedToken();
    const options = {
        expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }
    res.status(statusCode).cookie('token',token,options).json({
        success : true,
        user,
        token
    })
}