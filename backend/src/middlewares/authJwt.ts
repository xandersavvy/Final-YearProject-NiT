import express = require("express");
import { secret } from "../config";
import jwt = require('jsonwebtoken');
import { AuthReq } from "../interfaces";

let verifyToken = (req :AuthReq ,res:express.Response,next:express.NextFunction) => {
     let token:string = req.headers["x-access-token"] as string;
     if(!token) return res.sendStatus(403).send({message: "No token Provided"})
      jwt.verify(token, secret ,(err,decoded)=>{
          if (err)  return res.sendStatus(401).send({ message: "Unauthorized!" });
          if(decoded)req.userId = decoded.id;
          next();
      })
}

// next feature update 

// let isAdmin = (req : express.Request,res:express.Response,next:express.NextFunction)=> {
         
// }

// let isEmployee = (req : express.Request,res:express.Response,next:express.NextFunction) =>{
    
// }

export const authJwt = {
    verifyToken,
    // isAdmin,
    // isEmployee
}