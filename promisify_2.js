const fs = require('fs');
const util = require('util');
const readFilePromisify = util.promisify(fs.readFile);
readFilePromisify('./p.txt', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log('Error reading: ', err);
    });