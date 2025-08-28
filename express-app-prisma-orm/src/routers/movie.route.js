const express = require('express');
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie } = require('../controllers/movie.controller');
const movieRouter = express.Router()

movieRouter.post("/movie", createMovie)
movieRouter.get("/movie", readMovie)
movieRouter.get("/movie/:id", readMovieById)
movieRouter.put("/movie/:id", updateMovie)
movieRouter.delete("/movie/:id", deleteMovie)

module.exports = movieRouter
