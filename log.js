const EventEmitter = require('events');
const logEmitter = new EventEmitter();

var log_emit = () => (logEmitter.emit('rqst'));
var log_on = (u1,u2,u3) => {
    	logEmitter.once('rqst', () => {console.log('request method: ', u1);
	console.log('request header: ', u2);
	console.log('request url: ', u3);
	console.log('');})
};

module.exports.log_emit = log_emit;
module.exports.log_on = log_on;