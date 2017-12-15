const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

server.use(cors(corsOptions));
server.use(bodyParser.json());

routes(server);

module.exports = {
  server
};
