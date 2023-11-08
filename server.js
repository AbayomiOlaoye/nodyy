const http = require('http');

let server = http.createServer((request, response) => {
  let body = "What's up, man?";
  response.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain'
  });
  response.end(body);
})

server.listen(3000, () => {
  console.log('Server running on port 3000');
});