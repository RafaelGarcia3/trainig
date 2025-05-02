const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const movies = [
    {name: 'The Godfather', type: 'Crime/Drama', director: 'Francis Ford Coppola', year: 1972},
    {name: 'Pulp Fiction', type: 'Crime/Drama', director: 'Quentin Tarantino', year: 1994},
    {name: 'Inception', type: 'Sci-Fi/Thriller', director: 'Christopher Nolan', year: 2010},
    {name: 'Parasite', type: 'Thriller/Drama', director: 'Bong Joon-ho', year: 2019},
    {name: 'The Grand Budapest Hotel', type: 'Comedy/Drama', director: 'Wes Anderson', year: 2014},
    {name: 'Get Out', type: 'Horror/Thriller', director: 'Jordan Peele', year: 2017},
    {name: 'The Social Network', type: 'Drama/Biography', director: 'David Fincher', year: 2010},
    {name: 'Roma', type: 'Drama', director: 'Alfonso Cuarón', year: 2018},
    {name: 'Whiplash', type: 'Drama/Music', director: 'Damien Chazelle', year: 2014},
    {name: 'The Shape of Water', type: 'Fantasy/Drama', director: 'Guillermo del Toro', year: 2017},
    {name: 'Her', type: 'Romance/Sci-Fi', director: 'Spike Jonze', year: 2013},
    {name: 'The Matrix', type: 'Sci-Fi/Action', director: 'Lana & Lilly Wachowski', year: 1999},
    {name: 'Amélie', type: 'Romantic Comedy', director: 'Jean-Pierre Jeunet', year: 2001},
    {name: 'Oldboy', type: 'Mystery/Thriller', director: 'Park Chan-wook', year: 2003},
    {name: 'The Lighthouse', type: 'Horror/Drama', director: 'Robert Eggers', year: 2019},
    {name: 'La La Land', type: 'Musical/Romance', director: 'Damien Chazelle', year: 2016},
];

app.get('/api/movie', (req, res) => {
    const movieName = req.query.name?.toLowerCase();

    if(!movieName){
        return res.status(400).json({error: 'You must to provide a movie title'});
    }

    const movie = movies.find(m => m.name.toLowerCase() === movieName);

    if(movie){
        res.json(movie);
    }else{
        res.status(404).json({error: 'Movie not found'});
    }
});

app.listen(port, () =>{
    console.log(`Running dummy API on http://localhost:${port}`);
});

