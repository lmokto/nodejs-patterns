const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs
.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(file + '.gz'))
.on('finish', function() {
  console.log('File Succesfully Compressed!');
});
