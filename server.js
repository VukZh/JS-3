const http = require('http');
const logs = require('./log.js');

const hostname = '127.0.0.1';
const port = 2000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test request event\n');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname}:${port}/`);
});

server.on('request', function(req,res) {
    logs.log_on(req.method,req.headers,req.url);
    logs.log_emit();
});