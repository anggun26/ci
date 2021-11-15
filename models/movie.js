const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    desc: String,
    poster: String,
    genre: String,
    duration: String,
    quota:  Number,
    price: Number,
    qty: { type: Number, default: 0}
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie
