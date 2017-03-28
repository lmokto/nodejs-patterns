
function levelSubscribe(db) {

  db.subscribe = function (pattern, listener) {

    db.on('put', function (key, value) {
      const match = Object.keys(pattern).every(function(k) {
        return pattern[k] === value[k];
      });
      if (match) {
        listener(key, value);
      }
    });

  }

  return db;
}

module.exports = levelSubscribe;
