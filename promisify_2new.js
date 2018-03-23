const fs = require('fs');

const promiseReadFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

(async () => {
  console.log((await promiseReadFile('text.txt')).toString());
})();