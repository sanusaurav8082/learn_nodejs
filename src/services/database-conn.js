const mongoose = require('mongoose');
module.exports = {
	db_connect : function(){
					mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser: true, useUnifiedTopology: true});
					mongoose.connection.once('open',function(){
					console.log('Database connected successfully');
					}).on('error',function(err){
					console.log('Error',err);
					});
				}
};														 	
