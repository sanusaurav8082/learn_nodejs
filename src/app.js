//Variables declaration
var loaders = require('./loaders/loader');
var app = loaders.express();
var port = loaders.config.server.port;
//Middleware
app.use('/customers',loaders.customer_routes);
//Business logic
loaders.connection.db_connect();
app.get('/',(req,res)=>{
	res.send('Hello World');
	});
app.listen(port,(err) => {
	if(err) console.log(err);
	else {console.log('Server running on port : ' + port);	
	}
	});	