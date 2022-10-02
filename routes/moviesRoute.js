const express = require('express');
const moviesController = require('../controllers/moviesController')
const router = express.Router();

router.get('/',moviesController.movie_index)
router.get('/About',moviesController.movie_about)
router.get('/new_movie',moviesController.movie_create)

module.exports = router;