/*

  async_api_design

  If async, then always async

*/

const { readFile } = require('fs');

const CACHE = {};

function always_asynchronous() {
  console.log(`Always Async!!!!!`);
}

function _readFile(filename, callback) {
  if (CACHE[filename]) {
    console.log(`Cached but will return in nextTick`);
    process.nextTick(function(){
      return callback(CACHE[filename]);
    })
  } else {
    readFile(filename, 'utf8', function(err, data) {
      CACHE[filename] = data;
      return callback(err, data);
    });
  }
}


// Time - 1
_readFile('data.txt', always_asynchronous);

// Time - 2
setTimeout(() => {
  _readFile('data.txt', always_asynchronous);
}, 1000);
