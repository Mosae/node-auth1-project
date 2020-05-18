const express = require('express');
const helment = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/router.js');

const server = express();

server.use(helment());
server.use(express.json());
server.use(cors());

server.use('./api/users', usersRouter);

server.get('/', (req, res) => {
	res.send('Server is up and running');
});

module.exports = server;
