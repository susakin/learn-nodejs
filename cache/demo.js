var http = require('http');
var fs = require('fs');
var server  = new http.Server();

server.on('request',function(req,res) {
    fs.readFile('./index.html',function(err,file) {
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end(file);
    });
});

server.listen(3000);