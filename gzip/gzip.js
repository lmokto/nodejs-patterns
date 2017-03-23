const { readFile, writeFile } = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

readFile(file, function(err, buffer) {
  zlib.gzip(buffer, function(err, buffer) {
    writeFile(file + '.gz', buffer, function(err) {
      console.log('File Succesfully compressed!');
    });
  });
});
