const Profiler = require('./factory_pattern');

function getRandomArray(len) {
  const p = Profiler(`Generating a ${len} items long array`);
  p.start();
  const arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(Math.random());
  }
  p.end();
}

getRandomArray(1e6);
