const fs = require('fs');

function myPromisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    };
}

let str = 'ssssssssssddddddddddddffffffffffgt55ffffffjj6\n';

// const appFile = myPromisify (fs.appendFile);
// appFile('text.txt',str).then (() => console.log("added - ",str)). catch (err => console.log(err));

const readFile = myPromisify(fs.readFile);
readFile('text.txt').then((res) => console.log(res.toString())).catch(err => console.log(err));