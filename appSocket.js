module.exports = function(http) {
    const WebSocket = require('ws');
    const appSocket = new WebSocket.Server({ server: http })
    
    appSocket.on('connection', function connection(ws, req){
        console.log(req.headers)
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
    })
}

