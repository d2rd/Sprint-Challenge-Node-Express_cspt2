const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');  // morgan is assigned alias variable 'logger' for readability

// const middleware = require ('./custom_middleware.js');

const server = express();
const PORT = 5555;

server.use(
  express.json(),
  helmet(),
  logger('dev'), // logger('tiny')
);

server.listen(PORT, err => {
  console.log(`Listening on port ${PORT}`);
});

