// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const genresRouter = require('./genresRouter');
const artistsRouter = require('./artistsRouter');
const albumsRouter = require('./albumsRouter');

router.use('/', indexRouter);
router.use('/genres', genresRouter);
router.use('/artists', artistsRouter);
router.use('/albums', albumsRouter);

module.exports = router;
