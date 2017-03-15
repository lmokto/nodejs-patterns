/*

  Event Emitter Inheritance Pattern

*/

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

function find(files, reg) {
  const emitter = new EventEmitter();
  files.forEach(fileName => {
    fs.readFile(fileName, 'utf8', function(err, content) {
      if (err) {
        return emitter.emit('error', err);
      }
      emitter.emit('fileread', content);
      let match = null;
      if (match = content.match(reg)) {
        match.forEach(function (elem) {
          emitter.emit('found', fileName, elem);
        });
      }
    });
  });
  return emitter;
}

module.exports = find;
