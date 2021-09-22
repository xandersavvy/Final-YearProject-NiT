"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
require('dotenv').config();
class App {
    constructor() {
        this.app = express_1.default();
        this.apiV1Routes = express_1.default.Router();
        this.initializeMiddlewares();
        this.initializeLogger();
        this.initializeErrorHandling();
        this.routes();
    }
    createDBConnection() {
        mongoose_1.default.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
            poolSize: Number(process.env.MONGODB_POOLSIZE),
            keepAlive: true,
        });
    }
    listen() {
        this.createDBConnection();
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.raw());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_parser_1.default());
        this.app.use(morgan_1.default('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
    }
    initializeErrorHandling() {
    }
    initializeLogger() {
        const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(LOG_PREFIX + ": ");
            log.apply(console, args);
        };
    }
    routes() {
        this.app.get('/', (req, res, next) => {
            res.send('Senhigans Backend');
        });
        this.app.use('/api/v1', this.apiV1Routes);
        this.apiV1Routes.use('/user'); //enterroutes
    }
}
