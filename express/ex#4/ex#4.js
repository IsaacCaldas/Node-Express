const express = require('express');
const server = express();
const port = 2022;

server.route('/clients')
  .get((req, res) => res.send('Clients List'))
  .post((req, res) => res.send('New Client'))
  .put((req, res) => res.send('Change Client'))
  .delete((req, res) => res.send('Remove Client'));

server.listen(port, () => console.log(`This server is running in port ${port}...`));