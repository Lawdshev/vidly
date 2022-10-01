const express = require('express');
const app = express();
app.use(express.json());

app.listen(8080);

const movies = [
    {
        id: 1,
        genre: 'Action',
    },
    {
        id: 2,
        genre: 'Romance'
    },
    {
        id: 3,
        genre: 'Kids'
    },
    {
        id: 4,
        genre: 'Horror'
    },
]


app.get('/',((req,res)=>{
    res.send('Hello World')
}));
app.get('/about',((req,res)=>{
    res.send('Hello World about us')
}));

app.get('/api/movies',((req,res)=>{
    res.send(movies)
}));

app.get('/api/movies/:id',((req,res)=>{
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie)
}));

app.post('/api/movies',((req,res)=>{
     const movie = {
        id: movies.length + 1,
        genre: req.body.genre
    }
    movies.push(movie)

    if(!req.body.genre || req.body.genre.length < 3){
        res.send('specify a genre atleast three characters long')
        console.log('specify a genre atleast three characters long') 
    }
    res.send(movie);
}));

///put
app.put('/api/movies/:id',((req,res)=>{
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    if(!req.body.genre || req.body.genre.length < 3){
        res.send('specify a genre atleast three characters long')
        console.log('specify a genre atleast three characters long') 
    }
    movie.genre = req.body.genre;
    res.send(movie)
}))

///delete

app.delete('/api/movies/:id',((req,res)=>{
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const index = movies.indexOf(movie)
    movies.splice(index,1)
    res.send(movie)
}))