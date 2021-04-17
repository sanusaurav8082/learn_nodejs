var express = require('express')
var app = express();
var config = require('./config/default.json');
var customers = require('./controllers/customers');
app.use('/customers',customers);
app.get('/',(req,res)=>{
	res.render('index');
	});
var port = config.server.port;
app.listen(port,(err) => {
	if(err) console.log(err);
	else {console.log('Server running on port : ' + port);}
	});	