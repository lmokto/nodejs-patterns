const levelup = require('levelup');

let db = levelup('./mydb', { valueEncoding: 'json' });

db.put('name', 'LevelUp', err => {
  if (err) {
    return console.error('Ooops!', err);
  }
  db.get('name', (err, value) => {
    if (err) {
      return console.error('Ooops!', err);
    }
    console.log('name=', value);
  })
});

const levelSubscribe = require('./decorator_pattern_real_time');

db = levelSubscribe(db);

db.subscribe({ doctype: 'tweet', language: 'en' }, function(k, val) {
  console.log(val);
});

db.put('1', { doctype: 'tweet', text: 'Hi', language: 'en' });
db.put('2', { doctype: 'company', name: 'ACME Co.' });
