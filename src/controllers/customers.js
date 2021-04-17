var express = require('express');
var router = express.Router();
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});
router.get('/login', function(req, res) {
	res.send('GET request for LOGIN completed');
	})
router.get('/register', function(req, res) {
	res.send('POST request for REGISTER completed');
	});
module.exports = router;