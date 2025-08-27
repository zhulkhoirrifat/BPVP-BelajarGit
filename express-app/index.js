// import express, { text } from "express";
const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

// const logMiddleware = (req, res, next) => {
//     console.log("Ini dari middleware Log...");
//     next()
// }

// const getText = (req, res) => {
//     res.status(200).json({text: "this is text"})
// }

// app.get('/text', logMiddleware, getText)

// app.listen(port, () =>{
//     console.log(`Example app listening on port ${port}`)
// });

app.use(express.static("public"));

let footballers = [
  { id: 3, name: "JayIdzes" },
  { id: 5, name: "Bambang Pamungkas" },
  { id: 7, name: "Arhan" },
  { id: 9, name: "Kevin Diks" },
];

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {
  let result = "";
  let { title } = req.query;

  if (title == undefined) {
    title = "";
  }

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title.toLowerCase().includes(title.toLowerCase())) {
      result += `${i + 1}. ${movies[i].title} ${movies[i].year}`;
    }
  }
  res.send(result);
};

app.get("/movies", getMovies);

const getFootballers = (req, res) => {
  // res.send('Muncul nama pemain bola');
  let result = "";
  let { name } = req.query;
  console.log(name);

  if (name == undefined) {
    name = "";
  }
  for (let i = 0; i < footballers.length; i++) {
    if (footballers[i].name.toLowerCase().includes(name.toLowerCase())) {
      result += `${i + 1}. ${footballers[i].name} </br>`;
    }
  }

  res.send(result);
};

// app.get('/', (req, res) => {
//     res.send(`Hello World!`);
// });

const getFootballersById = (req, res) => {
  let { id } = req.params;

  let result = footballers.filter((item) => item.id === Number(id));
  res.send(footballers);
};
const tokenCheck = (req, res, next) => {
  let { token } = req.query;

  if (token !== "12345") {
    res.status(400).send("Token tidak tersedia atau salah");
  } else {
    next();
  }
};

const getMovie = (req, res, next) => {
  res.status(200).send("<h1>Anda berhasil mengakses fungsi getMovie() </h1>");
};

var basicAuth = (req, res, next) => {
  var authHeader = req.headers.authorization;

  if (!authHeader) {
    var err = "You're not authenticated!";
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
  var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  var user = auth[0];
  var pass = auth[1]; g

  if (user == "admin" && pass == "admin") {
    next();
  } else {
    var err = "You're not authenticated!";
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
};
app.get("/", tokenCheck, getMovie);

// app.get('/footballers', (req, res) => {
//     res.send(`Hello World!`)
// })

app.get("/footballers", getFootballers);
app.get(`/footballers/:id`, getFootballersById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/movies/:id", basicAuth, getMovie);
