const express = require('express')
const { createMovie, readMovie, updateMovie, deleteMovie } = require('../controllers/movieController')
const { validationBodyMovies } = require('../middleware/movieValidation')
const mainRouter = express.Router()

mainRouter.post("/movies", validationBodyMovies, createMovie)
mainRouter.get("/movies", readMovie)
mainRouter.put("/movies/:id", validationBodyMovies, updateMovie)
mainRouter.delete("/movies/:id", deleteMovie)

// define the home page route
mainRouter.get('/movie', (req, res) => {
  res.send('Birds home page')
});


module.exports = mainRouter
