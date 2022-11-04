const http = require('http');

const requestListener = function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end('Olá mundo moderno!');
}

const server = http.createServer(requestListener);
server.listen(8080);