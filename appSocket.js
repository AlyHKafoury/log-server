module.exports = function(http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        socket.use((packet, next) => {
            // Handler
            console.log(packet)
            next();
        });
    });
}

