var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.render('index');
});

router.get('/contacts', function(req, res){
	res.render('contacts');
});

router.get('/results', function(req, res){
	res.render('results');
});



module.exports = router;