// All /genres routes

const express = require('express');
const router = express.Router();

const { getAllGenres } = require('../controllers/genresController');

router.get('/', getAllGenres);

module.exports = router;