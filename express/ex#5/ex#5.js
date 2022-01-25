const express = require('express');
const server = express();
const port = 2022;
const router = require('./ex#5_routes');

server.use('./api', router);

server.listen(port, () => console.log(`This server is running in port ${port}...`));