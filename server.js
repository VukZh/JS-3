const http = require('http');
const logs = require('./log.js');

const hostname = '127.0.0.1';
const port = 2000;
var stringUrl = '';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test request event\n');
    stringUrl = hostname + ':' + port + req.url;

});

server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname}:${port}/`);
});

server.on('request', function() {
    logs.log_on(stringUrl);
    logs.log_emit();
});