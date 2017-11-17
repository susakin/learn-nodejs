var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var gzip = require('zlib').createGzip();
var server  = new http.Server();
//http://nodejs.cn/api/zlib.html
server.on('request',function(req,res) {
    var pathname = url.parse(req.url,true).pathname;
    var ext = path.extname(pathname).slice(1);
    console.log(pathname);
    var acceptEncoding = req.headers['accept-encoding'];
    if(ext) {
        var raw = fs.createReadStream('.' + pathname);
        if(acceptEncoding) {
            if(acceptEncoding.match(/gzip/i).length) {
                res.writeHead(200,{'Content-Encoding':'gzip'});
                raw.pipe(gzip).pipe(res);
            }
        } else {
            res.writeHead(200,{});
            raw.pipe(res);
        }
    }
});

server.listen(3000);