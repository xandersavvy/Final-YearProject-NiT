import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import cors = require('cors');
import logger = require('morgan');
import mongoose from 'mongoose';
import express = require('express');
import  { NextFunction, Response, Request } from 'express';
require('dotenv').config();
export default class App {
    public app: express.Application;
    public apiV1Routes: express.Router;
    

    constructor() {
        this.app = express();
        this.apiV1Routes = express.Router();
        this.initializeMiddlewares();
        this.initializeLogger();
        this.initializeErrorHandling();
        this.routes();
    }

    public createDBConnection() {
        const mongoURI : string = process.env.MONGODB_URI as string ;
        mongoose.connect(mongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true,
                poolSize: Number(process.env.MONGODB_POOLSIZE),
                keepAlive: true,
            });
    }

    public listen() {
        this.createDBConnection();
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.raw());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(logger('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
    }

    private initializeErrorHandling() {

    }

    private initializeLogger() {
        const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(LOG_PREFIX + ": ");
            log.apply(console, args);
        }
    }

    private routes() {
        this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('Senhigans Backend');
        });
        this.app.use('/api/v1', this.apiV1Routes);
        this.apiV1Routes.use('/user', ); //enterroutes
    }
}

