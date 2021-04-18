var express = require('express');
var router = express.Router();
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});
router.get('/', function(req,res) {
	res.send('Hello Customers!!!');
	});
router.get('/login', function(req, res) {
	res.send('Customers login!!!');
	})
router.get('/register', function(req, res) {
	res.send('Customers register!!!');
	});
module.exports = router;