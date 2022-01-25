const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('<h3>I think its better to use Express. </h3>');
}); 

const port = 3003;
server.listen(port, function() {
  console.log(`HTTP is running in ${port}.`);
});