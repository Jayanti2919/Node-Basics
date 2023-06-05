var http = require('http')
var date = require('./dateModule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("hello world at " + date.dateTime());
    res.end();
}).listen(8080);