const { request, response } = require("express");
const { prisma } = require("../config/utils");
const { getCurrentUser } = require("../config/libs");

const createMovie = async (request, response) => {
    let { title, year, categoryId } = request.body

    try {
        const user = await getCurrentUser(request.user)
        let movies = await prisma.Movies.create({
            data: {
                title,
                year,
                categoryId,
                userId: Number(user.id)
            }
        });
        response.json({
            data: movies,
            message: "Movies was successfully created",
            status: "success"
        })
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        })
    }
}

const readMovie = async (request, response) => {
    try {
        let allMovie = await prisma.Movies.findMany();
        response.json({
            data: allMovie,
            message: "All movies fetched successfully",
            status: "success"
        });
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        });
    }
}

const readMovieById = async (request, response) => {
    try {
        let { id } = request.params;
        let uniqMovie = await prisma.Movies.findUnique({
            where: {id: Number(id)}
        });
        if (!uniqMovie) {
            return response.status(404).json({
                data: null,
                message: "Movie not found",
                status: "error"
            });
        }
        response.json({
            data: uniqMovie,
            message: "Movie fetched successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json ({
            data: null,
            message: err.message || err,
            status: "error"
        })
    }
}

const updateMovie = async (request, response) => {
    try {
        let { id } = request.params
        let { title, year, categoryId} = request.body
        
        let updateMovie = await prisma.Movies.update({
            where: { id: Number(id)},
            data: {
                title,
                year,
                categoryId
            }
        });
        response.json({
            data: updateMovie,
            message: "Movie updated successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data: null,
            message: err.message || err,
            status: "error"
        })
    }
}

const deleteMovie = async (request, response) => {
    try {
        let { id } = request.params

        let deleteMovie = await prisma.Movies.delete({
            where: { id: Number(id) }
        });
        response.json({
            data: deleteMovie,
            message: "Movie deleted successfully",
            status: "success"
        });
        return;
    } catch (err) {
        response.json({
            data:null,
            message: err.message || err,
            status: "error"
        });
    }
}

module.exports = { createMovie, readMovie, readMovieById, updateMovie, deleteMovie }