require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connnectDb = require('./db/connectDb');
const {normalError } = require('./middleware/error');


//connect database

connnectDb();


//handle uncaught exception

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception', err.name, err.message , err.stack);
    process.exit(1);
});

// Middleware
app.use(express.json());
app.use(normalError);
app.use(express.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(require('cors')());
app.use("/user",require('./routes/userRoute'));
app.use("/dealer",require('./routes/dealerRoute'));
app.use("/product",require('./routes/productRoute'));






//unhandled promise rejections



//listen to server
 const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

server;
process.on('unhandledRejection', (err , promise ) => {
    console.log('Unhandled Rejection', err.name, err.message , err.stack);
    server.close(() => {process.exit(1)});
})


