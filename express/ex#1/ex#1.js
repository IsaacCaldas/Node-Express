const express = require('express');
const server = express();
const port = 2022;

server.get('/', function(req, res) {
  res.send('<h1>Index!</h1>');
});

server.all('/test', function(req, res) {
  res.send("<h1>Hey guys, i'm a test route");
});

// regular expression - /api/ -
// anything route with /api or in any word (BINapiIDl), this route will show res.send('<h3>API!</h3>');
server.get(/api/, function(res, res) {
  res.send('<h3>API!</h3>');
});

server.listen(port, () => console.log(`This server is running in port ${port}...`));