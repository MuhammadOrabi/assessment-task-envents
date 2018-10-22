require('rootpath')();
const app = require('express')();
const server = require('http').Server(app);
const rabbitmq = require('_helpers/rabbitmq');

const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    socket.on('doctor.create', data => {
        rabbitmq.sendToMQ('doctor.create', data);
    });
});



const port = process.env.PORT || 8888;

server.listen(port);
