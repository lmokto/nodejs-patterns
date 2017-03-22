
const iterateParellel = require('./parellel_pattern');
const fs = require('fs');
const http = require('http');

const readFile = (filename, callback) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    return callback(err, data);
  });
};

const Get = (url, callback) => {
  http.get(url, res => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];
    let error = null;
    if (statusCode !== 200) {
      error = new Error(
        `[Get] Request Failed - Status - ${statusCode}`
      );
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(
        `[Get] Invalid Content Type - Content Type - ${contentType}`
      );
    }
    if (error) {
      res.resume();
      return;
    }
    res.setEncoding('utf8');
    let raw = '';
    res.on('data', chunk => raw += chunk);
    res.on('end', () => {
      try {
        let parseData = JSON.parse(raw);
        return callback(error, parseData);
      } catch(e) {
        return callback(e, null);
      }
    });
    res.on('error', e => {
      return callback(e, null);
    });
  });
}

const task1 = (cb) => {
  readFile('data1.txt', cb);
}

const task2 = (cb) => {
  readFile('data2.txt', cb);
}

const task3 = (cb) => {
  readFile('data4.txt', cb);
}

const task4 = (cb) => {
  Get('http://nodejs.org/dist/index.json', cb);
}

iterateParellel([ task1, task2 ], function(result) {
  console.log(result);
});

iterateParellel([ task3, task4 ], function (result) {
  console.log(result);
});
