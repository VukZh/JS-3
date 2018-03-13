const dns = require('dns');

const util = require('util');

const dnsPromisify = util.promisify(dns.lookupService);
dnsPromisify('127.0.0.10', 80) //<--
    .then((hostname, service) => {
        console.log(hostname, service);
    })
    .catch((err) => {
        console.log('Error reading: ', err);
    });