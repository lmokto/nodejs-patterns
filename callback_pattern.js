/*

  Callback Pattern - Continuation Passing Style (CSP)

*/

const { readFile } = require('fs');

function should_be_invoked_after_something_async_happend() {
  console.log(`Ah!!! should_be_invoked_after_something_async_happend`);
}

function _readFile(filename, callback) {
  readFile(filename, 'utf8', function(err, data) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, data);
  });
}

_readFile('data.txt', should_be_invoked_after_something_async_happend);
