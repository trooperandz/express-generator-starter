// All /artists routes

const express = require('express');
const router = express.Router();

const { getAllArtists } = require('../controllers/artistsController');

router.get('/', getAllArtists);

module.exports = router;