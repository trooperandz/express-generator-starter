// All /albums routes

const express = require('express');
const router = express.Router();

const { getAllAlbums } = require('../controllers/albumsController');


// Note: this route is actually /albums due to our index.js setup
router.get('/', getAllAlbums);

module.exports = router;