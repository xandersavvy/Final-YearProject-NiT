const ErrorHandler = require("../utils/errorHandler");



//normal Error handling
normalError = (err, req, res, next) => {
    let statusCode = err.statusCode||500;
    let message = err.message||'Something went wrong';
    switch(err.name) {
        case 'CastError':
            statusCode = 400;
            message = 'Invalid ID';
            break;
        case 'ValidationError':
            const messages = Object.values(err.errors).map(val => val.message);
            statusCode = 400;
            message = messages;
            break;
        case 'JsonWebTokenError':
            statusCode = 401;
            message = 'Invalid token';
            break;
        case 'TokenExpiredError':
            statusCode = 401;
            message = 'Token expired';
            break;
        case 'PermissionError':
            statusCode = 403;
            message = 'Permission denied';
            break;
        case 'AuthenticationError':
            statusCode = 401;
            message = 'Authentication failed';
            break;
        case 'ForbiddenError':
            statusCode = 403;
            message = 'Forbidden';
            break;
        case 'BadRequestError':
            statusCode = 400;
            message = 'Bad request';
            break;
        case 'NotFoundError':
            statusCode = 404;
            message = 'Not found';
            break;
        case 'ConflictError':
            statusCode = 409;
            message = 'Conflict';
            break;
        case 'InternalServerError':
            statusCode = 500;
            message = 'Internal server error';
            break;
        default:
            statusCode = err.statusCode||500;
            message = err.message||'Something went wrong';
            break;
    }

    err = (err.code === 11000)? 
            new ErrorHandler(`${Object.keys(err.keyValue)[0]} already exists`,400):
            new ErrorHandler(message,statusCode);

    res.status(err.statusCode).json({
        success: false,
        status: err.statusCode,
        message: err.message,
        error: err.stack
    });

}


//async Error handling

asyncError = asyncError1 => (req, res, next) => Promise.resolve(asyncError1(req, res, next)).catch(next);

module.exports = {
    normalError,
    asyncError
}