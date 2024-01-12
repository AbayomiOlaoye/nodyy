const http = require('http');

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello, world! This is the data from server');
  res.end();
}).listen(3000);
