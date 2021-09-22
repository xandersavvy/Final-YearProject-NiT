import express = require("express");

import jwt = require('jsonwebtoken');

let verifyToken = (req : express.Request,_res:express.Response,_next:express.NextFunction) => {
     let token = req.headers["x-access-token"]


}

let isAdmin = (req : express.Request,res:express.Response,next:express.NextFunction)=> {
         
}

let isEmployee = (req : express.Request,res:express.Response,next:express.NextFunction) =>{
    
}

export const authJwt = {
    verifyToken,
    isAdmin,
    isEmployee
}