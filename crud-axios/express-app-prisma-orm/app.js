// import express, { text } from "express";
const express = require('express');
const app = express();
const port = 3000;
const categoryRouter = require('./src/routers/category.route');
const cors = require('cors');
const movieRouter = require('./src/routers/movie.route');
 
let corsOptions = {
  origin: process.env.CORS_ALLOW_LIST.split(','),
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', categoryRouter);
app.use('/api', movieRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
