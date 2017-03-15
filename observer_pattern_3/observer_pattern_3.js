/*

  Observer Pattern - 3

  To Make Any Object Observable in Sync

*/

const EventEmitter = require('events').EventEmitter;
const util = require('util');
const { readFile } = require('fs');

function finder(reg) {
  EventEmitter.call(this);
  this.reg = reg;
  this.files = [];
  process.nextTick(() => {
    this.emit('ready');
  });
}

util.inherits(finder, EventEmitter);

finder.prototype.addFile = function (fileName) {
  this.files.push(fileName);
  return this;
};

finder.prototype.find = function() {
  this.files.forEach(file => {
    readFile(file, 'utf8', (err, content) => {
      if (err) {
        return this.emit('error', err);
      }
      this.emit('fileread', content);
      let match = null;
      if (match = content.match(this.reg)) {
        match.forEach(elem => {
          this.emit('found', file, elem);
        });
      }
    });
  });
  return this;
}

module.exports = finder;
