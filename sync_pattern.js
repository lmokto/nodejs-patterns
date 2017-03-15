/*

  Synchronous Pattern

*/

const { readFileSync } = require('fs');

function should_be_invoked_after_something_sync_happed() {
  console.log(`Ah! Something Sync Happend!!`);
}

function _readFile(filename, callback) {
  let file = null;
  try {
    file = readFileSync(filename, 'utf8');
  } catch (e) {
    throw e;
  } finally {
    should_be_invoked_after_something_sync_happed();
  }
}

_readFile('data.txt');
