require('dotenv').config();
const http = require('http');
//const https = require('https');
const socket = require('socket.io');
const app = require('./app');
const event = require('./events/event');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new socket.Server(server);
event(io);

server.listen(PORT, () => {
    console.log(`server turn ${PORT}`);
});