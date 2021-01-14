// built in http module that can create servers with
const http = require('http');

const server = http.createServer((request, result) => {     // this is an EventEmitter
    if (request.url === '/') {
        result.write("Hello There");
        result.end();
    }

    if (request.url === '/api/courses') {
        result.write(JSON.stringify([1, 3, 45, 9]));
        result.end();
    }
});

server.on('connection', (socket) => {
    console.log('new connection');
});

server.listen(3000);    //give it a port to watch, go to localhost:3000 to trigger event

console.log('listening on port 3000');