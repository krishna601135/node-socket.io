const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

const PORT = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../client')));

const chatController = require('./controllers/chatController');
io.on('connection', (socket) => chatController(io, socket));

server.listen(PORT, () => {
 console.log(`server is running at http://localhost:${PORT}`)
})

