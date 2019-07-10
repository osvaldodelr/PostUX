const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('hello login');
});

module.exports = router;