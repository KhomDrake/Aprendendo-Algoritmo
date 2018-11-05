var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('Problemas');
});

router.get('/1', (req, res) => {
    res.render('Problema/Problema1');
});

module.exports = router;
