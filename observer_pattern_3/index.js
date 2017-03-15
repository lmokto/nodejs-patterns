const finder = require('./observer_pattern_3');

const _finder = new finder(/lorem \w+/gi);

_finder.on('ready', function() {
  _finder
    .addFile('data1.txt')
    .addFile('data2.txt')
    .find()
    .on('found', function(file, match) {
      console.log(`Found :: ${match} | file :: ${file}`);
    })
    .on('error', function(err) {
      console.log(`Error`, err);
    })
})
