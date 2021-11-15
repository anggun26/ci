const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const Movie = require('../models/movie');
const movieData = require('/db');

app.get('/', (req, res, next) => {
    Movie.find(movieData)
     .then(movies => {
         res.status(201).json(movies)
     }) 
     .catch(next)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });