var http = require('http') // in built module
var date = require('./dateModule') // user made module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("hello world at " + date.dateTime());
    res.end();
}).listen(8080);