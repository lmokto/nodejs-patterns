const compositionProxy = require('./proxy_pattern_composition');
const immediateProxy = require('./proxy_pattern_immediate_typing');
const monkeyPatching = require('./proxy_pattern_monkey_patching');
const loggingProxy = require('./proxy_pattern_real_time');

const Subject = {};

Subject.getLabel = function () {
  return this.label;
};

Subject.setLabel = function (label) {
  this.label = label;
};

const inheritenceProxied = compositionProxy(Subject);

inheritenceProxied.setLabel('Inheritence');

inheritenceProxied.getLabel();

const immediateProxied = immediateProxy(Subject);

immediateProxied.setLabel('Immediate');

immediateProxied.getLabel();

const monkeyPatched = monkeyPatching(Subject);

monkeyPatched.setLabel('Monkey Patched');

monkeyPatched.getLabel();

const fs = require('fs');
const writable = fs.createWriteStream('data.txt');
const writableProxy = loggingProxy(writable);

writableProxy.write('First Chunk \n');
writableProxy.write('Second Chunk \n');

writable.write('This is not logged \n');

writableProxy.end();
