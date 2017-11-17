var fs = require('fs');

function outputSrc(path) {
    fs.readdir(path,function(err,files) {
        console.log(files.length);
        files.forEach(function(file) {
            var pathName = path + '/' + file;
            fs.stat(pathName,function(err,stats) {
                if(stats.isDirectory) {
                    outputSrc(pathName);
                } else {
                    console.log(pathName);
                }
            });
        });
    });
}
outputSrc('./demo')