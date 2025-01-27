const fs = require('fs').promises;
const port = 3000;
const express = require('express'); 
const app = express()
/* const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, noden!');
});

async function createFile() {
  try {
    await fs.writeFile('example.txt', 'Hello, world!');
    console.log('File has been created!');
  } catch (err) {
    console.error(err);
  }
}

createFile(); */

console.log("hello world");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


