const express = require("express");
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie } = require("../controllers/movieController");
const authenticateJwt = require("../middleware/authMiddleware");

const movieRouter = express.Router()

movieRouter.post("/movies", authenticateJwt, createMovie)
movieRouter.get("/movies", authenticateJwt, readMovie)
movieRouter.get("/movies/:id", readMovieById)
movieRouter.put("/movies/:id", updateMovie)
movieRouter.delete("/movies/:id", deleteMovie)

module.exports = movieRouter