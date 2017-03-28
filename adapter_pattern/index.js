const levelup = require('levelup');
const fsAdapter = require('./adapter_pattern_real_time');

const db = levelup('./mydb', { valueEncoding: 'binary'});
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello!', function() {
  fs.readFile('file.txt', { encoding: 'utf8' }, function(err, res) {
    console.log(res);
  });
});
