const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.host || 0.0.0.0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://${host}:${port}/`);
});
