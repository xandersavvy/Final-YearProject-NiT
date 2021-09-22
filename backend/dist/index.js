"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
// import express from 'express';
const app_1 = __importDefault(require("./app"));
require('dotenv').config();
// import cors from 'cors';
const app = new app_1.default;
const PORT = 3000 || process.env.PORT;
app.listen();
// // Handling GET / Request
// app.get('/', (req, res) => {
//     res.send('Kelabo pratik Babe khaya');
// })
// Server setup
// app.listen(PORT,() => {
//     console.log(`The application is listening on port http://localhost:${PORT}`);
// })
