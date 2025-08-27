const express = require("express");
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie } = require("../controllers/movieController");
const authenticateJwt = require("../middleware/authMiddleware");
const { validationBodyMovies } = require("../middleware/validation");

const movieRouter = express.Router()

movieRouter.post("/movies", authenticateJwt, validationBodyMovies, createMovie)
movieRouter.get("/movies", authenticateJwt, readMovie)
movieRouter.get("/movies/:id", authenticateJwt, readMovieById)
movieRouter.put("/movies/:id", authenticateJwt, validationBodyMovies, updateMovie)
movieRouter.delete("/movies/:id", authenticateJwt, deleteMovie)

module.exports = movieRouter