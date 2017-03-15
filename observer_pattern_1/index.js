const find = require('./observer_pattern_1');

const finder = find(
  [
    'data1.txt',
    'data2.txt'
  ],
  /lorem \w+/gi
);


finder.on('fileread', function (file) {
  console.log('file |', file);
});

finder.on('found', function(file, match) {
  console.log(`Matched ${match}, file ${file}`);
});

finder.on('error', function(err) {
  console.log('Error', err);
});
