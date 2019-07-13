const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('aun no se ha renderizado vista en la ruta routes/index');
});

module.exports = router;