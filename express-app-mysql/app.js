// import express, { text } from "express";
const express = require('express');
const mainRouter = require('./src/routers/main');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', mainRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
