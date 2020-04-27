var express = require('express');
var router = express.Router();

/* GET competitions listing. */
router.get('/', function(req, res, next) {
  res.render('competitions/index', { title: 'Competitions' });
});

router.get('/:userId(\d+)', function(req, res, next) {
  res.render('competitions/main', { title: 'Competitions' });
});

module.exports = router;
