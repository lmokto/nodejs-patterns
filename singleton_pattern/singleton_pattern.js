/*

  Singleton Pattern - This is like exporting a same instance every time it is
  required from the different module

  DIS-ADVANTAGES:
      Because the module is cached, every module that requires the logger module
will actually always retrieve the same instance of the object, thus sharing its state.
This pattern is very much like creating a Singleton, however, it does not guarantee
the uniqueness of the instance across the entire application, as it happens in the
traditional Singleton pattern. When analyzing the resolving algorithm, we have seen
in fact, that a module might be installed multiple times inside the dependency tree
of an application. This results with multiple instances of the same logical module, all
running in the context of the same Node.js application

*/

function Logger(time) {
  this.count = 0;
  this.get_time = time;
}

Logger.prototype.info = function (message) {
  console.log(`INFO :: ${this.get_time} :: ${message} :: COUNT :: ${this.count}`);
  this.count = this.count + 1;
};

Logger.prototype.warning = function (message) {
  console.warn(`WARN :: ${this.get_time} :: ${message} :: COUNT :: ${this.count}`);
  this.count = this.count + 1;
};

module.exports = new Logger(new Date());
