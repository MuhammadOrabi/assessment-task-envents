const app = require('express')();
const server = require('http').Server(app);
// const open = require('amqplib').connect('amqp://localhost');


const port = process.env.PORT || 8888;

server.listen(port);

const io = require('socket.io')({
    path: '/socket'
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('user.create', function (data) {
        console.log(data);
    });
});