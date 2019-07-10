const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/post', (req, res) => {
    res.send('Hello Post');
});

module.exports = router;