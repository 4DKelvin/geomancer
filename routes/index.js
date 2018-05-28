var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/pay', function(req, res, next) {
    res.render('pay', { title: 'Express' });
});
router.get('/result', function(req, res, next) {
    res.render('result', { title: 'Express' });
});

module.exports = router;