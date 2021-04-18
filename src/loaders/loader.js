module.exports = {
	express : require('express'),
	customer_routes : require('../controllers/customer-routes'),
	connection : require('../services/database-conn.js'),
	config : require('../config/default.json')
};