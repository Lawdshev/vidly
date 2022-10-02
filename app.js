const express = require('express');
const movieRoute = require('./routes/moviesRoute');



const app = express();

//middlewares
app.set('view engine','ejs');

//routes
app.use(movieRoute)
app.use((req,res)=>{
    res.status(302).render('404',{ title: 404 })
})
app.listen(8080);