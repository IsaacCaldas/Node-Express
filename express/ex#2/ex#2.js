const express = require('express');
const server = express();
const port = 2022;

server.get('/', function(req, res, next){
  console.log('Init...');
  next(); // ele vai para o próximo middleware que é o do log = answer, e depois retorna.
  console.log('End...');
});

server.get('/', function(req, res){
  console.log('Answer...');
  res.send('<h1>Hello Express!</h1>');
});

server.listen(port, () => console.log(`This server is running in port ${port}...`));