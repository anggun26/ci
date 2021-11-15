const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const Movie = require('../models/movie');

app.get('/', (req, res) => {
    res.status(200).json({message : "Yeay Berhasil Hore"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });