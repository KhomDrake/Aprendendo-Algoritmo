var express = require('express');
var router = express.Router();

router.get('/parte1', (req, res, next) => {
  res.render('Twitter1');
});

module.exports = router;
