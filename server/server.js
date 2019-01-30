const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey, What is going on.',
    //     createAt: 123
    // });

    //message from server to client
    // socket.emit('newMessage', {
    //     from: 'Evan',
    //     text: 'message from server admin to client',
    //     createAt: Date()
    // });

    //listen an event sent from client to server
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('disconnect', () => {
        console.log('Server disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
