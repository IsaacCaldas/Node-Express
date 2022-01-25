const express = require('express');
const server = express();
const port = 2022;

server.use('/api', function(req, res, next){
  console.log('Init...');
  next();
  console.log('End...');
});

server.use('/api', function(req, res){
  console.log('Answer...');
  res.send('<h1>API!</h1>');
});

server.listen(port, () => console.log(`This server is running in port ${port}...`));