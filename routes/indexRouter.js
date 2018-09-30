// All main index routes

const express = require('express');
const router = express.Router();

const { getIndexData } = require('../controllers/indexController');

router.get('/', getIndexData);

module.exports = router;