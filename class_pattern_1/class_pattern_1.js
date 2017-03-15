/*

  JS: Class Pattern

*/

function Logger(time) {
  // Gaurd againt race condition like invoking this class without `new`
  // factory : self handle the `new`
  if (!(this instanceof Logger)) {
    return new Logger(time);
  }
  this.get_time = time;
}

Logger.prototype.info = function (message) {
  console.log(`INFO :: ${this.get_time} :: ${message}`);
};

Logger.prototype.warning = function (message) {
  console.warn(`WARN :: ${this.get_time} :: ${message}`);
};

module.exports = Logger;
