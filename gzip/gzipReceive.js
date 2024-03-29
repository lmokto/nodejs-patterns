const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer(function(req, res) {
  const filename = req.headers.filename;
  console.log('File Request Recevied: ', filename);
  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', function() {
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end("That's it \n");
      console.log("File Saved : ", filename);
    })
});


server.listen(3000, function() {
  console.log('Listening');
});
