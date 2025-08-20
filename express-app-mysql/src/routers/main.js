const express = require('express')
const { createMovie, readMovie, updateMovie, deleteMovie } = require('../controllers/movieController')
const mainRouter = express.Router()

mainRouter.post("/movies", createMovie)
mainRouter.get("/movies", readMovie)
mainRouter.put("/movies/:id", updateMovie)
mainRouter.delete("/movies/:id", deleteMovie)

// define the home page route
mainRouter.get('/movie', (req, res) => {
  res.send('Birds home page')
});


module.exports = mainRouter
