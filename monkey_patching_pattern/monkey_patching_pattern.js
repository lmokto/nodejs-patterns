/*

  Monkey Patching

  DIS-ADVANTAGES:
    The techniques described here are all dangerous ones to apply. The main concern
is that, to have a module that modifies the global namespace or other modules is an
operation with side effects. In other words, it affects the state of entities outside their
scope, which can have consequences that are not always predictable, especially when
multiple modules interact with the same entities. Imagine to have two different
modules trying to set the same global variable, or modifying the same property
of the same module; the effects might be unpredictable (which module wins?),
but most importantly it would have repercussions on the entire application.

*/

const Logger = require('../singleton_pattern/singleton_pattern');

Logger.versbose =  function(message) {
  console.log(`VERBOSE :: ${this.get_time} :: COUNT :: ${this.count}`);
}

module.exports = Logger;
