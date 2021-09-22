// Importing module
// import express from 'express';
import App from './app';
require('dotenv').config();  
// import cors from 'cors';

const app = new App;
const PORT : Number= 3000||process.env.PORT;
  

app.listen();

// // Handling GET / Request
// app.get('/', (req, res) => {
//     res.send('Kelabo pratik Babe khaya');
// })
  
// Server setup
// app.listen(PORT,() => {
//     console.log(`The application is listening on port http://localhost:${PORT}`);
// })