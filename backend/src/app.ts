// import bodyParser = require('body-parser');
// import cookieParser = require('cookie-parser');
// import cors = require('cors');
// import logger = require('morgan');
// // import mongoose from 'mongoose';
// import express = require('express');
// import  { NextFunction, Response, Request } from 'express';
// require('dotenv').config();

// const app:express.Application = express();
// const apiRoutes:express.Router = express.Router();

// const routes = () => {
//     app.get('/',(req: Request, res: Response, next: NextFunction) => {
//         res.send('Senhigans Backend');
//     })
// }
// const listen = () => {
//     routes();
//     app.listen(process.env.PORT , () => console.log(`App listening on port ${process.env.PORT}`)
//     )
// }
// const getServer = () => app;

// const initializeMiddlewares = () => {
//     app.use(cors());
//     app.use(bodyParser.json());
//     app.use(bodyParser.raw());
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(logger('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
// }

// const initializeLogger = () =>{
//     const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
//         const log = console.log;
//         console.log = function () {
//             const args = Array.from(arguments);
//             args.unshift(LOG_PREFIX + ": ");
//             log.apply(console, args);
//         }
// }

// export const App = {
//     routes,
//     listen ,
//     initializeLogger,
//     initializeMiddlewares
// }

import express from "express";
import { connect } from "./database/database";
const app = express();
const port = 5002;
connect();
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

export default app;
