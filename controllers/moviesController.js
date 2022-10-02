const moviesDatabase = require('../database');

const movie_index = (req,res)=>{
    const movies = moviesDatabase.sort();
    try {
      res.render('index',{title: 'All Movies', movies })
    } catch (error) {
      console.log(error);
}};
const movie_about = (req,res)=>{
    try {
      res.render('about',{title: 'About us' })
    } catch (error) {
      console.log(error);
}};
const movie_create = (req,res)=>{
    try {
      res.render('new_movie',{title: 'new movie' })
    } catch (error) {
      console.log(error);
}};
module.exports = {
    movie_index,
    movie_about,
    movie_create,
}