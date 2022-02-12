const jsonwebtoken = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const { asyncError } = require("./error");

exports.isAuthenticated = asyncError(
    async (req, res, next) => {
        const {token} = req.cookies;
        if(!token) return next(new ErrorHandler(401, "Unauthorized"));
        const {userId} = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if(!userId) return next(new ErrorHandler(401, "Unauthorized"));
        req.user = await User.findById(userId);
        next();
    } 
)

exports.isAdmin = asyncError(async (req, res, next) => {
        if(req.user.role !== "admin") return next(new ErrorHandler(403, "Forbidden"));
        next();
    })

exports.isHr = asyncError(async (req, res, next) => {
        if(req.user.role !== "hr" && req.user.role !=="admin")  return next(new ErrorHandler(403, "Forbidden"));
        next();
    })

exports.isManager = asyncError(async (req, res, next) => {
        if(req.user.role !== "manager"  && req.user.role !=="admin") return next(new ErrorHandler(403, "Forbidden"));
        next();
})

exports.isSalesMan = asyncError(async (req, res, next) => {
    if(this.isAdmin) return next();
    if(req.user.role !== "salesman"  && req.user.role !=="admin") return next(new ErrorHandler(403, "Forbidden"));
    next();
})