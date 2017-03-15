/*

  sync_api_design

  If sync, then always sync

*/

const { readFileSync } = require('fs');

const CACHE = {};

function always_synchronous() {
  console.log(`Always sync!!!!!`);
}

function _readFile(filename, callback) {
  if (CACHE[filename]) {
    return callback(CACHE[filename]);
  } else {
    const file = readFileSync(filename, 'utf8');
    CACHE[filename] = file;
    return callback(file);
  }
}


// Time - 1
_readFile('data.txt', always_synchronous);

// Time - 2
_readFile('data.txt', always_synchronous);
