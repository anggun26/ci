const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const movieData = require('./models/movie');

let movieData = [{
    title: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
    desc: `Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.`,
    poster: 'https://cdn0-production-images-kly.akamaized.net/JiCDYDWDmwp7DDNIBlTTGOzABGE=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3434118/original/014340800_1618897521-EzVqwiaVoAIAv-E.jpg',
    genre: 'Action/Fantasi',
    duration: '2h 12m',
    quota: 10, 
    price: 45000,
    qty: 0
}, 
{
    title: 'Dune',
    desc: `Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.`,
    poster: 'https://awsimages.detik.net.id/visual/2021/09/20/dune_169.jpeg?w=360&q=90',
    genre: 'Sci-fi/Adventure',
    duration: '2h 35m',
    quota: 3,
    price: 52500,
    qty: 0
}]

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