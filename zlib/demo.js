var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var server  = new http.Server();

server.on('request',function(req,res) {
    var pathname = url.parse(req.url,true).pathname;
    var ext = path.extname(pathname).slice(1);
    var acceptEncoding = req.headers['accept-encoding'];
    if(ext) {
        if(acceptEncoding) {
            if(acceptEncoding.match(/gzip/i).length) {

            }
        } else {
            fs.readFile(pathname,function(err,file) {
                if(err) {
                    res.writeHead(500,{});
                    res.end(err);
                } else {
                    res.writeHead(200,{});
                    res.end(file);
                }
            });
        }
    }
    res.end('hello world!')
});

server.listen(3000);