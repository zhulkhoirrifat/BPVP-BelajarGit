const { request, response } = require("express");
const { connectionPool } = require("../config/database");

// create
const createMovie = (request, response) => {
    let { title, year } = request.body
    let queryText = `INSERT INTO movies (title, year, created_at, updated_at) VALUES('${title}', ${year}, NOW(), NOW())`
    connectionPool.query(queryText, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            response.json("Movie was successfully created")
        })
    }

const readMovie = (request, response) => {
    let queryText = `SELECT * FROM movies`
    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err);
            return;
        }

        let movies = data.map(element => {
            let {id, title, year, created_at, updated_at} = element;
            let movie = {}
            movie.id = id;
            movie.title = title;
            movie.year = year;
            movie.created_at = created_at;
            movie.updated_at = updated_at;

            return movie;
        });
        response.json(movies);
    })
}

const updateMovie = (request, response) => {
    const { title, year } = request.body
    let { id } = request.params
    let queryText = `UPDATE movies SET title='${title}', year=${Number(year)}, updated_at=NOW() WHERE id=${id}` 
    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        response.json("movie was successfully updated")
    })
}

const deleteMovie = (request, response) => {
    let { id } = request.params
    let queryText = `DELETE FROM movies WHERE id=${id}`
    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        response.json("movie was successfully deleted")
    })
}


module.exports = { createMovie, readMovie, updateMovie, deleteMovie }
