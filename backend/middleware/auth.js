const jsonwebtoken = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const { asyncError } = require("./error");

exports.isAuthenticated = asyncError(
    async (req, res, next) => {
        const {token} = req.cookies;
        // console.log(token);
        if(!token) return next(new ErrorHandler("No token",401));
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if(!data.id) return next(new ErrorHandler( "Unauthorized",401));
        req.user = await User.findById(data.id);
        // console.log(req.user);
        next();
    } 
)

exports.isAdmin = asyncError(async (req, res, next) => {
        if(req.user.role !== "admin") return next(new ErrorHandler("Forbidden",403));
        next();
    })

exports.isHr = asyncError(async (req, res, next) => {
        if(req.user.role !== "hr" && req.user.role !=="admin")  return next(new ErrorHandler( "Forbidden" ,403));
        next();
    })

exports.isManager = asyncError(async (req, res, next) => {
        if(req.user.role !== "manager"  && req.user.role !=="admin") return next(new ErrorHandler( "Forbidden",403));
        next();
})

exports.isSalesMan = asyncError(async (req, res, next) => {
    // if(this.isAdmin) return next();
    if(req.user.role !== "salesman"  && req.user.role !=="admin") return next(new ErrorHandler("Forbidden",403));
    next();
})