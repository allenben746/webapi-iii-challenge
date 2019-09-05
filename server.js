const express = require('express');
const server = express();



//Route handler
server.get('/', (req, res) => {
  console.log(`Logging request information...`)
  console.log(`${req.method}, ${req.url} @ ${new Date().toISOString()}`)
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {

};

module.exports = server;
