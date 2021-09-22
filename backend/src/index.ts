// Importing module
import express from 'express';
const dotenv = require('dotenv').config();  
import cors from 'cors';

const app = express();
const PORT:Number=3000;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Kelabo pratik Babe khaya');
})
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})