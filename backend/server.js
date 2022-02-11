require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connnectDb = require('./db/connectDb');


//connect database

connnectDb();


// Middleware
app.use(express.json());
app.use(require('cookie-parser')());
app.use(require('cors')());
app.use("/",require('./routes/userRoute'));
















//listen to server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}
);