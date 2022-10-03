const express = require('express');
const moviesController = require('../controllers/moviesController')
const router = express.Router();

router.get('/',moviesController.movie_index);
router.get('/About',moviesController.movie_about);
router.get('/new_movie',moviesController.movie_create);
router.get('/:id',moviesController.movie_get);
router.post('/',moviesController.movie_post);
router.delete('/:id',moviesController.movie_delete);

module.exports = router;