const fs = require('fs');

fs.writeFile('hello/hello.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File created');
});
