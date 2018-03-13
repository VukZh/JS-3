const EventEmitter = require('events');
const logEmitter = new EventEmitter();

log_emit = () => (logEmitter.emit('rqst'));
log_on = (u) => {
    logEmitter.once('rqst', () => (console.log('request from URL: ', u)))
};

module.exports.log_emit = log_emit;
module.exports.log_on = log_on;