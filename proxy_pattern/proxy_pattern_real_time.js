
function createLoggingWritable(writable) {
  const proto = Object.getPrototypeOf(writable);

  function LoggingWritable() {
    this.writable = writable;
  }

  LoggingWritable.prototype = Object.create(proto);

  LoggingWritable.prototype.write = function (chunk, encoding, callback) {
    if (!callback && typeof encoding === 'function') {
      callback = encoding;
      encoding = null;
    }
    console.info('Writing ', chunk);
    return this.writable.write(chunk, encoding, function() {
      console.log('Finished writing ', chunk);
      return callback && callback();
    });
  };

  LoggingWritable.prototype.on = function () {
    return this.writable.on.apply(this.writable, arguments);
  };

  LoggingWritable.prototype.end = function () {
    return this.writable.end.apply(this.writable, arguments);
  };

  return new LoggingWritable(writable);

}

module.exports =  createLoggingWritable;
