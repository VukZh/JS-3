const fs = require('fs');

const promiseAppendFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, data, (err, data) => {
      err ? reject(err) : resolve(console.log('OK'));
    });
  });
};

let str = 'ssssssssssddddddddddddffffffffffgt55ffffffjj6\n';
(async () => {
  console.log((await promiseAppendFile('text.txt',str)));
})();