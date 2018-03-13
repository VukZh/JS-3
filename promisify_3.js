const fs = require('fs');
const util = require('util');
const readFilePromisify = util.promisify(fs.access);
var err = 0;
readFilePromisify('./p1.txt', 'utf8') //<--
    .then(() => {
        console.log('read');
    })
    .catch((err) => {
        if (err != undefined) console.log('no access file!');
    });